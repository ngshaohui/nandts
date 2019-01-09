import { nand_gate } from './nand_gate'

export function xor_gate(a: boolean, b: boolean) {
  const a_nand_b = nand_gate(a, b)
  const a_nand_a_nand_b = nand_gate(a, a_nand_b) // a nand (a nand b)
  const b_nand_a_nand_b = nand_gate(b, a_nand_b) // b nand (a nand b)

  return nand_gate(a_nand_a_nand_b, b_nand_a_nand_b)
}