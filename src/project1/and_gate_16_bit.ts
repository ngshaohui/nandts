import { and_gate, AndGate } from "./and_gate"

export function and_gate_16_bit(x: boolean[], y: boolean[]) {
  return [
    and_gate(x[0], y[0]),
    and_gate(x[1], y[1]),
    and_gate(x[2], y[2]),
    and_gate(x[3], y[3]),
    and_gate(x[4], y[4]),
    and_gate(x[5], y[5]),
    and_gate(x[6], y[6]),
    and_gate(x[7], y[7]),
    and_gate(x[8], y[8]),
    and_gate(x[9], y[9]),
    and_gate(x[10], y[10]),
    and_gate(x[11], y[11]),
    and_gate(x[12], y[12]),
    and_gate(x[13], y[13]),
    and_gate(x[14], y[14]),
    and_gate(x[15], y[15])
  ]
}

export class AndGate16Bit {
  a: boolean[]
  b: boolean[]
  and1: AndGate
  and2: AndGate
  and3: AndGate
  and4: AndGate
  and5: AndGate
  and6: AndGate
  and7: AndGate
  and8: AndGate
  and9: AndGate
  and10: AndGate
  and11: AndGate
  and12: AndGate
  and13: AndGate
  and14: AndGate
  and15: AndGate
  and16: AndGate
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
    this.and1 = new AndGate()
    this.and2 = new AndGate()
    this.and3 = new AndGate()
    this.and4 = new AndGate()
    this.and5 = new AndGate()
    this.and6 = new AndGate()
    this.and7 = new AndGate()
    this.and8 = new AndGate()
    this.and9 = new AndGate()
    this.and10 = new AndGate()
    this.and11 = new AndGate()
    this.and12 = new AndGate()
    this.and13 = new AndGate()
    this.and14 = new AndGate()
    this.and15 = new AndGate()
    this.and16 = new AndGate()
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

  private runCircuit(): void {
    this.and1.set(this.a[0], this.b[0])
    this.output[0] = this.and1.getOutput()
    this.and2.set(this.a[1], this.b[1])
    this.output[1] = this.and2.getOutput()
    this.and3.set(this.a[2], this.b[2])
    this.output[2] = this.and3.getOutput()
    this.and4.set(this.a[3], this.b[3])
    this.output[3] = this.and4.getOutput()
    this.and5.set(this.a[4], this.b[4])
    this.output[4] = this.and5.getOutput()
    this.and6.set(this.a[5], this.b[5])
    this.output[5] = this.and6.getOutput()
    this.and7.set(this.a[6], this.b[6])
    this.output[6] = this.and7.getOutput()
    this.and8.set(this.a[7], this.b[7])
    this.output[7] = this.and8.getOutput()
    this.and9.set(this.a[8], this.b[8])
    this.output[8] = this.and9.getOutput()
    this.and10.set(this.a[9], this.b[9])
    this.output[9] = this.and10.getOutput()
    this.and11.set(this.a[10], this.b[10])
    this.output[10] = this.and11.getOutput()
    this.and12.set(this.a[11], this.b[11])
    this.output[11] = this.and12.getOutput()
    this.and13.set(this.a[12], this.b[12])
    this.output[12] = this.and13.getOutput()
    this.and14.set(this.a[13], this.b[13])
    this.output[13] = this.and14.getOutput()
    this.and15.set(this.a[14], this.b[14])
    this.output[14] = this.and15.getOutput()
    this.and16.set(this.a[15], this.b[15])
    this.output[15] = this.and16.getOutput()
  }

  getOutput(): boolean[] {
    return this.output
  }
}
