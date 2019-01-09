import { and_gate } from './and_gate'

export function and_gate_16_bit(
  x: boolean[], y: boolean[]
) {

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