import { or_gate } from './or_gate'

export function or_gate_16_bit(
  x: boolean[], y: boolean[]
) {

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