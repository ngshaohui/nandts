import { nand_gate } from './nand_gate'

export function or_gate(a: boolean, b: boolean) {
  const not_a = nand_gate(a, a)
  const not_b = nand_gate(b, b)

  return nand_gate(not_a, not_b)
}