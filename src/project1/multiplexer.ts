import { nand_gate } from "./nand_gate"

export function multiplexer(s: boolean, a: boolean, b: boolean) {
  const not_s = nand_gate(s, s)
  const a_nand_not_s = nand_gate(a, not_s) // a nand (not s)
  const b_nand_s = nand_gate(b, s)

  return nand_gate(a_nand_not_s, b_nand_s)
}

// should eventually deprecate functions and use solely classes
export class Multiplexer {
  select: boolean
  a: boolean
  b: boolean
  private output: boolean
  constructor() {
    this.select = false
    this.a = false
    this.b = false
    this.output = false
  }

  set(select: boolean, a: boolean, b: boolean) {
    this.select = select
    this.a = a
    this.b = b
    this.runCircuit()
  }

  private runCircuit(): void {
    const not_s = nand_gate(this.select, this.select)
    const a_nand_not_s = nand_gate(this.a, not_s) // a nand (not s)
    const b_nand_s = nand_gate(this.b, this.select)

    this.output = nand_gate(a_nand_not_s, b_nand_s)
  }

  getOutput(): boolean {
    return this.output
  }
}
