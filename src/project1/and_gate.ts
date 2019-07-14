import { nand_gate } from "./nand_gate"
import { NandGate } from "./nand_gate"

export function and_gate(a: boolean, b: boolean) {
  const a_nand_b = nand_gate(a, b)

  return nand_gate(a_nand_b, a_nand_b)
}

export class AndGate {
  a: boolean
  b: boolean
  nand1: NandGate
  nand2: NandGate
  private output: boolean
  constructor() {
    this.a = false
    this.b = false
    this.nand1 = new NandGate()
    this.nand2 = new NandGate()
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
    this.nand2.set(this.nand1.getOutput(), this.nand1.getOutput())
    this.output = this.nand2.getOutput()
  }
}
