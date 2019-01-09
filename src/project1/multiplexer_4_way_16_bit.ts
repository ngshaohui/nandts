import { multiplexer_16_bit } from './multiplexer_16_bit'

export function multiplexer_4_way_16_bit(
  s0: boolean, s1: boolean,
  a: boolean[],
  b: boolean[],
  c: boolean[],
  d: boolean[]
) {
  const x = multiplexer_16_bit(s1, a, b)
  const y = multiplexer_16_bit(s1, c, d)

  return multiplexer_16_bit(s0, x, y)
}