import { multiplexer_16_bit, Multiplexer16Bit } from "./multiplexer_16_bit"

export function multiplexer_4_way_16_bit(
  s0: boolean,
  s1: boolean,
  a: boolean[],
  b: boolean[],
  c: boolean[],
  d: boolean[]
) {
  const x = multiplexer_16_bit(s1, a, b)
  const y = multiplexer_16_bit(s1, c, d)

  return multiplexer_16_bit(s0, x, y)
}
export class Multiplexer4Way16Bit {
  s0: boolean
  s1: boolean
  a: boolean[]
  b: boolean[]
  c: boolean[]
  d: boolean[]
  mux16Bit1: Multiplexer16Bit
  mux16Bit2: Multiplexer16Bit
  mux16Bit3: Multiplexer16Bit
  private output: boolean[]
  constructor() {
    this.s0 = false
    this.s1 = false
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
    this.c = [
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
    this.d = [
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
    this.mux16Bit1 = new Multiplexer16Bit()
    this.mux16Bit2 = new Multiplexer16Bit()
    this.mux16Bit3 = new Multiplexer16Bit()
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

  set(
    s0: boolean,
    s1: boolean,
    a: boolean[],
    b: boolean[],
    c: boolean[],
    d: boolean[]
  ) {
    this.s0 = s0
    this.s1 = s1
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    this.runCircuit()
  }

  private runCircuit(): void {
    this.mux16Bit1.set(this.s1, this.a, this.b)
    this.mux16Bit2.set(this.s1, this.c, this.d)

    this.mux16Bit3.set(
      this.s0,
      this.mux16Bit1.getOutput(),
      this.mux16Bit2.getOutput()
    )
    this.output = this.mux16Bit3.getOutput()
  }

  getOutput(): boolean[] {
    return this.output
  }
}
