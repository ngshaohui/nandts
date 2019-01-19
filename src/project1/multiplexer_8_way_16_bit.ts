import { multiplexer_16_bit } from './multiplexer_16_bit'
import { multiplexer_4_way_16_bit } from './multiplexer_4_way_16_bit'

export class multiplexer_8_way_16_bit {
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
  output: boolean[]

  constructor(
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
  ) {
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
    this.output = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  }

  runCircuit(): void {
    const x = multiplexer_4_way_16_bit(this.s1, this.s2, this.a, this.b, this.c, this.d)
    const y = multiplexer_4_way_16_bit(this.s1, this.s2, this.e, this.f, this.g, this.h)

    this.output = multiplexer_16_bit(this.s0, x, y)
  }
}