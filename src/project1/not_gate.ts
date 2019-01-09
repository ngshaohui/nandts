import { nand_gate } from './nand_gate'

export function not_gate(a: boolean) {
  // or nand_gate(a, true)
  return nand_gate(a, a)
}