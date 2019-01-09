import { not_gate } from './not_gate'

export function not_gate_16_bit(
  x: boolean[]
) {
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