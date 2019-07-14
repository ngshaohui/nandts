import { or_gate, OrGate } from "./or_gate"

export function or_gate_16_way(x: boolean[]) {
  const xx0 = or_gate(x[0], x[1])
  const xx1 = or_gate(x[2], x[3])
  const xx2 = or_gate(x[4], x[5])
  const xx3 = or_gate(x[6], x[7])
  const xx4 = or_gate(x[8], x[9])
  const xx5 = or_gate(x[10], x[11])
  const xx6 = or_gate(x[12], x[13])
  const xx7 = or_gate(x[14], x[15])

  const xxx0 = or_gate(xx0, xx1)
  const xxx1 = or_gate(xx2, xx3)
  const xxx2 = or_gate(xx4, xx5)
  const xxx3 = or_gate(xx6, xx7)

  const xxxx0 = or_gate(xxx0, xxx1)
  const xxxx1 = or_gate(xxx2, xxx3)

  return or_gate(xxxx0, xxxx1)
}

export class OrGate16Way {
  a: boolean[]
  or1: OrGate
  or2: OrGate
  or3: OrGate
  or4: OrGate
  or5: OrGate
  or6: OrGate
  or7: OrGate
  or8: OrGate
  or9: OrGate
  or10: OrGate
  or11: OrGate
  or12: OrGate
  or13: OrGate
  or14: OrGate
  or15: OrGate
  private output: boolean
  constructor() {
    this.a = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]
    this.or1 = new OrGate()
    this.or2 = new OrGate()
    this.or3 = new OrGate()
    this.or4 = new OrGate()
    this.or5 = new OrGate()
    this.or6 = new OrGate()
    this.or7 = new OrGate()
    this.or8 = new OrGate()
    this.or9 = new OrGate()
    this.or10 = new OrGate()
    this.or11 = new OrGate()
    this.or12 = new OrGate()
    this.or13 = new OrGate()
    this.or14 = new OrGate()
    this.or15 = new OrGate()
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
    this.or5.set(this.a[8], this.a[9])
    this.or6.set(this.a[10], this.a[11])
    this.or7.set(this.a[12], this.a[13])
    this.or8.set(this.a[14], this.a[15])
    this.or9.set(this.or1.getOutput(), this.or2.getOutput())
    this.or10.set(this.or3.getOutput(), this.or4.getOutput())
    this.or11.set(this.or5.getOutput(), this.or6.getOutput())
    this.or12.set(this.or7.getOutput(), this.or8.getOutput())
    this.or13.set(this.or9.getOutput(), this.or10.getOutput())
    this.or14.set(this.or11.getOutput(), this.or12.getOutput())
    this.or15.set(this.or13.getOutput(), this.or14.getOutput())
    this.output = this.or15.getOutput()
  }
}
