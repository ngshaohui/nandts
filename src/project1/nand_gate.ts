export function nand_gate(a: boolean, b: boolean) {
  return !(a && b)
}

export class NandGate {
  a: boolean
  b: boolean
  private output: boolean
  constructor() {
    this.a = false
    this.b = false
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
    this.output = !(this.a && this.b)
  }
}
