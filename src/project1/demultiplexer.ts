import { nand_gate, NandGate } from "./nand_gate"

export function demultiplexer(input: boolean, s: boolean) {
  const not_s = nand_gate(s, s)
  const input_nand_not_s = nand_gate(input, not_s) // input nand (not s)
  const input_nand_s = nand_gate(input, s)

  return [
    nand_gate(input_nand_not_s, input_nand_not_s),
    nand_gate(input_nand_s, input_nand_s)
  ]
}

export class Demultiplexer {
  input: boolean
  s: boolean
  nand1: NandGate
  nand2: NandGate
  nand3: NandGate
  nand4: NandGate
  nand5: NandGate
  private output: [boolean, boolean]
  constructor() {
    this.input = false
    this.s = false
    this.nand1 = new NandGate()
    this.nand2 = new NandGate()
    this.nand3 = new NandGate()
    this.nand4 = new NandGate()
    this.nand5 = new NandGate()
    this.output = [false, false]
  }

  set(input: boolean, s: boolean) {
    this.input = input
    this.s = s
    this.runCircuit()
  }

  private runCircuit(): void {
    this.nand1.set(this.s, this.s)
    this.nand2.set(this.input, this.nand1.getOutput())
    this.nand3.set(this.input, this.s)
    this.nand4.set(this.nand2.getOutput(), this.nand2.getOutput())
    this.nand5.set(this.nand3.getOutput(), this.nand3.getOutput())

    this.output = [this.nand4.getOutput(), this.nand5.getOutput()]
  }

  getOutput(): [boolean, boolean] {
    return this.output
  }
}
