import { multiplexer_16_bit } from './multiplexer_16_bit'
import { multiplexer_4_way_16_bit } from './multiplexer_4_way_16_bit'

export function multiplexer_8_way_16_bit(
  s0: boolean, s1: boolean, s2: boolean,
  a: boolean[],
  b: boolean[],
  c: boolean[],
  d: boolean[],
  e: boolean[],
  f: boolean[],
  g: boolean[],
  h: boolean[]
) {
  const x = multiplexer_4_way_16_bit(s1, s2, a, b, c, d)
  const y = multiplexer_4_way_16_bit(s1, s2, e, f, g, h)

  return multiplexer_16_bit(s0, x, y)
}