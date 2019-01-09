import { or_gate } from './or_gate'

export function or_gate_8_way(
  x: boolean[]
) {
  const xx0 = or_gate(x[0], x[1])
  const xx1 = or_gate(x[2], x[3])
  const xx2 = or_gate(x[4], x[5])
  const xx3 = or_gate(x[6], x[7])

  const xxx0 = or_gate(xx0, xx1)
  const xxx1 = or_gate(xx2, xx3)

  return or_gate(xxx0, xxx1)
}