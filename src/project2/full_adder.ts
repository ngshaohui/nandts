// TODO redo this using half adders

import { and_gate } from '../project1/and_gate'
import { or_gate } from '../project1/or_gate'
import { xor_gate } from '../project1/xor_gate'

export function full_adder(a: boolean, b: boolean, c_in: boolean) {
  const x0 = xor_gate(a, b)
  const sum = xor_gate(x0, c_in)
  const y0 = and_gate(x0, c_in)
  const y1 = and_gate(a, b)
  const c_out = or_gate(y0, y1)

  return [sum, c_out]
}