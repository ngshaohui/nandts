import { nand_gate } from './nand_gate'

export function demultiplexer(input: boolean, s: boolean) {
  const not_s = nand_gate(s, s)
  const input_nand_not_s = nand_gate(input, not_s) // input nand (not s)
  const input_nand_s = nand_gate(input, s)

  return [
    nand_gate(input_nand_not_s, input_nand_not_s),
    nand_gate(input_nand_s, input_nand_s)
  ]
}