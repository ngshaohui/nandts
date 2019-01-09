import { or_gate } from './or_gate'

export function or_gate_16_way(
  x: boolean[]
) {
  const xx0 = or_gate(x[0], x[1])
  const xx1 = or_gate(x[2], x[3])
  const xx2 = or_gate(x[4], x[5])
  const xx3 = or_gate(x[6], x[7])
  const xx4 = or_gate(x[8], x[9])
  const xx5 = or_gate(x[10], x[11])
  const xx6 = or_gate(x[12], x[13])
  const xx7 = or_gate(x[14], x[15])

  const xxx0 = or_gate(xx0, xx1)
  const xxx1 = or_gate(xx2, xx3)
  const xxx2 = or_gate(xx4, xx5)
  const xxx3 = or_gate(xx6, xx7)

  const xxxx0 = or_gate(xxx0, xxx1)
  const xxxx1 = or_gate(xxx2, xxx3)

  return or_gate(xxxx0, xxxx1)
}