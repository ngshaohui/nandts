import { multiplexer, Multiplexer } from "./multiplexer"

export function multiplexer_16_bit(s: boolean, x: boolean[], y: boolean[]) {
  return [
    multiplexer(s, x[0], y[0]),
    multiplexer(s, x[1], y[1]),
    multiplexer(s, x[2], y[2]),
    multiplexer(s, x[3], y[3]),
    multiplexer(s, x[4], y[4]),
    multiplexer(s, x[5], y[5]),
    multiplexer(s, x[6], y[6]),
    multiplexer(s, x[7], y[7]),
    multiplexer(s, x[8], y[8]),
    multiplexer(s, x[9], y[9]),
    multiplexer(s, x[10], y[10]),
    multiplexer(s, x[11], y[11]),
    multiplexer(s, x[12], y[12]),
    multiplexer(s, x[13], y[13]),
    multiplexer(s, x[14], y[14]),
    multiplexer(s, x[15], y[15])
  ]
}

export class Multiplexer16Bit {
  s: boolean
  a: boolean[]
  b: boolean[]
  mux1: Multiplexer
  mux2: Multiplexer
  mux3: Multiplexer
  mux4: Multiplexer
  mux5: Multiplexer
  mux6: Multiplexer
  mux7: Multiplexer
  mux8: Multiplexer
  mux9: Multiplexer
  mux10: Multiplexer
  mux11: Multiplexer
  mux12: Multiplexer
  mux13: Multiplexer
  mux14: Multiplexer
  mux15: Multiplexer
  mux16: Multiplexer
  private output: boolean[]
  constructor() {
    this.s = false
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
    this.mux1 = new Multiplexer()
    this.mux2 = new Multiplexer()
    this.mux3 = new Multiplexer()
    this.mux4 = new Multiplexer()
    this.mux5 = new Multiplexer()
    this.mux6 = new Multiplexer()
    this.mux7 = new Multiplexer()
    this.mux8 = new Multiplexer()
    this.mux9 = new Multiplexer()
    this.mux10 = new Multiplexer()
    this.mux11 = new Multiplexer()
    this.mux12 = new Multiplexer()
    this.mux13 = new Multiplexer()
    this.mux14 = new Multiplexer()
    this.mux15 = new Multiplexer()
    this.mux16 = new Multiplexer()
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

  set(s: boolean, a: boolean[], b: boolean[]) {
    this.s = s
    this.a = a
    this.b = b
    this.runCircuit()
  }

  getOutput(): boolean[] {
    return this.output
  }

  private runCircuit(): void {
    this.mux1.set(this.s, this.a[0], this.b[0])
    this.mux2.set(this.s, this.a[1], this.b[1])
    this.mux3.set(this.s, this.a[2], this.b[2])
    this.mux4.set(this.s, this.a[3], this.b[3])
    this.mux5.set(this.s, this.a[4], this.b[4])
    this.mux6.set(this.s, this.a[5], this.b[5])
    this.mux7.set(this.s, this.a[6], this.b[6])
    this.mux8.set(this.s, this.a[7], this.b[7])
    this.mux9.set(this.s, this.a[8], this.b[8])
    this.mux10.set(this.s, this.a[9], this.b[9])
    this.mux11.set(this.s, this.a[10], this.b[10])
    this.mux12.set(this.s, this.a[11], this.b[11])
    this.mux13.set(this.s, this.a[12], this.b[12])
    this.mux14.set(this.s, this.a[13], this.b[13])
    this.mux15.set(this.s, this.a[14], this.b[14])
    this.mux16.set(this.s, this.a[15], this.b[15])
    this.output[0] = this.mux1.getOutput()
    this.output[1] = this.mux2.getOutput()
    this.output[2] = this.mux3.getOutput()
    this.output[3] = this.mux4.getOutput()
    this.output[4] = this.mux5.getOutput()
    this.output[5] = this.mux6.getOutput()
    this.output[6] = this.mux7.getOutput()
    this.output[7] = this.mux8.getOutput()
    this.output[8] = this.mux9.getOutput()
    this.output[9] = this.mux10.getOutput()
    this.output[10] = this.mux11.getOutput()
    this.output[11] = this.mux12.getOutput()
    this.output[12] = this.mux13.getOutput()
    this.output[13] = this.mux14.getOutput()
    this.output[14] = this.mux15.getOutput()
    this.output[15] = this.mux16.getOutput()
  }
}
