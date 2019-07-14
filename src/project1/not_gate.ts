import { nand_gate, NandGate } from "./nand_gate"

export function not_gate(a: boolean) {
  // or nand_gate(a, true)
  return nand_gate(a, a)
}

export class NotGate {
  a: boolean
  nand: NandGate
  private output: boolean
  constructor() {
    this.a = false
    this.nand = new NandGate()
  }

  set(a: boolean) {
    this.a = a
    this.runCircuit()
  }

  getOutput(): boolean {
    return this.output
  }

  private runCircuit(): void {
    this.nand.set(this.a, this.a)
    this.output = this.nand.getOutput()
  }
}
