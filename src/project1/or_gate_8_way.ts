import { or_gate, OrGate } from "./or_gate"

export function or_gate_8_way(x: boolean[]) {
  const xx0 = or_gate(x[0], x[1])
  const xx1 = or_gate(x[2], x[3])
  const xx2 = or_gate(x[4], x[5])
  const xx3 = or_gate(x[6], x[7])

  const xxx0 = or_gate(xx0, xx1)
  const xxx1 = or_gate(xx2, xx3)

  return or_gate(xxx0, xxx1)
}

export class OrGate8Way {
  a: boolean[]
  or1: OrGate
  or2: OrGate
  or3: OrGate
  or4: OrGate
  or5: OrGate
  or6: OrGate
  or7: OrGate
  private output: boolean
  constructor() {
    this.a = [false, false, false, false, false, false, false, false]
    this.or1 = new OrGate()
    this.or2 = new OrGate()
    this.or3 = new OrGate()
    this.or4 = new OrGate()
    this.or5 = new OrGate()
    this.or6 = new OrGate()
    this.or7 = new OrGate()
  }

  set(a: boolean[]) {
    this.a = a
    this.runCircuit()
  }

  getOutput(): boolean {
    return this.output
  }

  private runCircuit(): void {
    this.or1.set(this.a[0], this.a[1])
    this.or2.set(this.a[2], this.a[3])
    this.or3.set(this.a[4], this.a[5])
    this.or4.set(this.a[6], this.a[7])
    this.or5.set(this.or1.getOutput(), this.or2.getOutput())
    this.or6.set(this.or3.getOutput(), this.or4.getOutput())
    this.or7.set(this.or5.getOutput(), this.or6.getOutput())
    this.output = this.or7.getOutput()
  }
}
