import { and_gate } from '../project1/and_gate'
import { xor_gate } from '../project1/xor_gate'

export function half_adder(a: boolean, b: boolean) {
  const sum = xor_gate(a, b)
  const carry = and_gate(a, b)

  return [sum, carry]
}