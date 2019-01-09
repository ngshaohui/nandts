import { nand_gate } from './nand_gate'

export function and_gate(a: boolean, b: boolean) {
  const a_nand_b = nand_gate(a, b)

  return nand_gate(a_nand_b, a_nand_b)
}