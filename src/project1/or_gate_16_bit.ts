import { or_gate, OrGate } from "./or_gate"

export function or_gate_16_bit(x: boolean[], y: boolean[]) {
  return [
    or_gate(x[0], y[0]),
    or_gate(x[1], y[1]),
    or_gate(x[2], y[2]),
    or_gate(x[3], y[3]),
    or_gate(x[4], y[4]),
    or_gate(x[5], y[5]),
    or_gate(x[6], y[6]),
    or_gate(x[7], y[7]),
    or_gate(x[8], y[8]),
    or_gate(x[9], y[9]),
    or_gate(x[10], y[10]),
    or_gate(x[11], y[11]),
    or_gate(x[12], y[12]),
    or_gate(x[13], y[13]),
    or_gate(x[14], y[14]),
    or_gate(x[15], y[15])
  ]
}

export class OrGate16Bit {
  a: boolean[]
  b: boolean[]
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
  or16: OrGate
  private output: boolean[]
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
    this.b = [
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
    this.or16 = new OrGate()
    this.output = [
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
  }

  set(a: boolean[], b: boolean[]) {
    this.a = a
    this.b = b
    this.runCircuit()
  }

  getOutput(): boolean[] {
    return this.output
  }

  private runCircuit(): void {
    this.or1.set(this.a[0], this.b[0])
    this.or2.set(this.a[1], this.b[1])
    this.or3.set(this.a[2], this.b[2])
    this.or4.set(this.a[3], this.b[3])
    this.or5.set(this.a[4], this.b[4])
    this.or6.set(this.a[5], this.b[5])
    this.or7.set(this.a[6], this.b[6])
    this.or8.set(this.a[7], this.b[7])
    this.or9.set(this.a[8], this.b[8])
    this.or10.set(this.a[9], this.b[9])
    this.or11.set(this.a[10], this.b[10])
    this.or12.set(this.a[11], this.b[11])
    this.or13.set(this.a[12], this.b[12])
    this.or14.set(this.a[13], this.b[13])
    this.or15.set(this.a[14], this.b[14])
    this.or16.set(this.a[15], this.b[15])
    this.output[0] = this.or1.getOutput()
    this.output[1] = this.or2.getOutput()
    this.output[2] = this.or3.getOutput()
    this.output[3] = this.or4.getOutput()
    this.output[4] = this.or5.getOutput()
    this.output[5] = this.or6.getOutput()
    this.output[6] = this.or7.getOutput()
    this.output[7] = this.or8.getOutput()
    this.output[8] = this.or9.getOutput()
    this.output[9] = this.or10.getOutput()
    this.output[10] = this.or11.getOutput()
    this.output[11] = this.or12.getOutput()
    this.output[12] = this.or13.getOutput()
    this.output[13] = this.or14.getOutput()
    this.output[14] = this.or15.getOutput()
    this.output[15] = this.or16.getOutput()
  }
}
