import { not_gate, NotGate } from "./not_gate"

export function not_gate_16_bit(x: boolean[]) {
  return [
    not_gate(x[0]),
    not_gate(x[1]),
    not_gate(x[2]),
    not_gate(x[3]),
    not_gate(x[4]),
    not_gate(x[5]),
    not_gate(x[6]),
    not_gate(x[7]),
    not_gate(x[8]),
    not_gate(x[9]),
    not_gate(x[10]),
    not_gate(x[11]),
    not_gate(x[12]),
    not_gate(x[13]),
    not_gate(x[14]),
    not_gate(x[15])
  ]
}

export class NotGate16Bit {
  a: boolean[]
  not1: NotGate
  not2: NotGate
  not3: NotGate
  not4: NotGate
  not5: NotGate
  not6: NotGate
  not7: NotGate
  not8: NotGate
  not9: NotGate
  not10: NotGate
  not11: NotGate
  not12: NotGate
  not13: NotGate
  not14: NotGate
  not15: NotGate
  not16: NotGate
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
    this.not1 = new NotGate()
    this.not2 = new NotGate()
    this.not3 = new NotGate()
    this.not4 = new NotGate()
    this.not5 = new NotGate()
    this.not6 = new NotGate()
    this.not7 = new NotGate()
    this.not8 = new NotGate()
    this.not9 = new NotGate()
    this.not10 = new NotGate()
    this.not11 = new NotGate()
    this.not12 = new NotGate()
    this.not13 = new NotGate()
    this.not14 = new NotGate()
    this.not15 = new NotGate()
    this.not16 = new NotGate()
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

  set(a: boolean[]) {
    this.a = a
    this.runCircuit()
  }

  getOutput(): boolean[] {
    return this.output
  }

  private runCircuit(): void {
    this.not1.set(this.a[0])
    this.not2.set(this.a[1])
    this.not3.set(this.a[2])
    this.not4.set(this.a[3])
    this.not5.set(this.a[4])
    this.not6.set(this.a[5])
    this.not7.set(this.a[6])
    this.not8.set(this.a[7])
    this.not9.set(this.a[8])
    this.not10.set(this.a[9])
    this.not11.set(this.a[10])
    this.not12.set(this.a[11])
    this.not13.set(this.a[12])
    this.not14.set(this.a[13])
    this.not15.set(this.a[14])
    this.not16.set(this.a[15])
    this.output[0] = this.not1.getOutput()
    this.output[1] = this.not2.getOutput()
    this.output[2] = this.not3.getOutput()
    this.output[3] = this.not4.getOutput()
    this.output[4] = this.not5.getOutput()
    this.output[5] = this.not6.getOutput()
    this.output[6] = this.not7.getOutput()
    this.output[7] = this.not8.getOutput()
    this.output[8] = this.not9.getOutput()
    this.output[9] = this.not10.getOutput()
    this.output[10] = this.not11.getOutput()
    this.output[11] = this.not12.getOutput()
    this.output[12] = this.not13.getOutput()
    this.output[13] = this.not14.getOutput()
    this.output[14] = this.not15.getOutput()
    this.output[15] = this.not16.getOutput()
  }
}
