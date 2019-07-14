import { Multiplexer16Bit } from "./multiplexer_16_bit"
import {
  multiplexer_4_way_16_bit,
  Multiplexer4Way16Bit
} from "./multiplexer_4_way_16_bit"

export class Multiplexer8Way16Bit {
  s0: boolean
  s1: boolean
  s2: boolean
  a: boolean[]
  b: boolean[]
  c: boolean[]
  d: boolean[]
  e: boolean[]
  f: boolean[]
  g: boolean[]
  h: boolean[]
  multiplexer16Bit: Multiplexer16Bit
  multiplexer4Way16Bit1: Multiplexer4Way16Bit
  multiplexer4Way16Bit2: Multiplexer4Way16Bit
  output: boolean[]

  constructor() {
    this.s0 = false
    this.s1 = false
    this.s2 = false
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
    this.e = [
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
    this.f = [
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
    this.g = [
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
    this.h = [
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
    this.multiplexer16Bit = new Multiplexer16Bit()
    this.multiplexer4Way16Bit1 = new Multiplexer4Way16Bit()
    this.multiplexer4Way16Bit2 = new Multiplexer4Way16Bit()
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

  setCurcuit(
    s0: boolean,
    s1: boolean,
    s2: boolean,
    a: boolean[],
    b: boolean[],
    c: boolean[],
    d: boolean[],
    e: boolean[],
    f: boolean[],
    g: boolean[],
    h: boolean[]
  ): void {
    this.s0 = s0
    this.s1 = s1
    this.s2 = s2
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    this.e = e
    this.f = f
    this.g = g
    this.h = h
    this.runCircuit()
  }

  getOutput(): boolean[] {
    return this.output
  }

  runCircuit(): void {
    this.multiplexer4Way16Bit1.set(
      this.s1,
      this.s2,
      this.a,
      this.b,
      this.c,
      this.d
    )
    this.multiplexer4Way16Bit2.set(
      this.s1,
      this.s2,
      this.e,
      this.f,
      this.g,
      this.h
    )

    this.multiplexer16Bit.set(
      this.s0,
      this.multiplexer4Way16Bit1.getOutput(),
      this.multiplexer4Way16Bit2.getOutput()
    )

    this.output = this.multiplexer16Bit.getOutput()
  }
}
