import { multiplexer } from './multiplexer'

export function multiplexer_16_bit(
  s: boolean,
  x: boolean[], y: boolean[]
) {

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