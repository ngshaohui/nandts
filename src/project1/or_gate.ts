import { nand_gate, NandGate } from "./nand_gate"

export function or_gate(a: boolean, b: boolean) {
  const not_a = nand_gate(a, a)
  const not_b = nand_gate(b, b)

  return nand_gate(not_a, not_b)
}

export class OrGate {
  a: boolean
  b: boolean
  nand1: NandGate
  nand2: NandGate
  nand3: NandGate
  private output: boolean
  constructor() {
    this.a = false
    this.b = false
    this.nand1 = new NandGate()
    this.nand2 = new NandGate()
    this.nand3 = new NandGate()
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
    this.nand1.set(this.a, this.a)
    this.nand2.set(this.b, this.b)
    this.nand3.set(this.nand1.getOutput(), this.nand2.getOutput())
    this.output = this.nand3.getOutput()
  }
}
