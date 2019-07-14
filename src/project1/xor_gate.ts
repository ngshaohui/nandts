import { nand_gate, NandGate } from "./nand_gate"

export function xor_gate(a: boolean, b: boolean) {
  const a_nand_b = nand_gate(a, b)
  const a_nand_a_nand_b = nand_gate(a, a_nand_b) // a nand (a nand b)
  const b_nand_a_nand_b = nand_gate(b, a_nand_b) // b nand (a nand b)

  return nand_gate(a_nand_a_nand_b, b_nand_a_nand_b)
}

export class XorGate {
  a: boolean
  b: boolean
  nand1: NandGate
  nand2: NandGate
  nand3: NandGate
  nand4: NandGate
  private output: boolean
  constructor() {
    this.a = false
    this.b = false
    this.nand1 = new NandGate()
    this.nand2 = new NandGate()
    this.nand3 = new NandGate()
    this.nand4 = new NandGate()
    this.output = false
  }

  set(a: boolean, b: boolean) {
    this.a = a
    this.b = b
    this.runCircuit()
  }

  getOutput(): boolean {
    return this.output
  }

  private runCircuit(): void {
    this.nand1.set(this.a, this.b)
    this.nand2.set(this.a, this.nand1.getOutput())
    this.nand3.set(this.b, this.nand1.getOutput())
    this.nand4.set(this.nand2.getOutput(), this.nand3.getOutput())
    this.output = this.nand4.getOutput()
  }
}
