import { nand_gate } from '../project1/nand_gate'
import { not_gate } from '../project1/not_gate'

// should use a class since state has to be retained
export class d_flip_flop {
  data: boolean
  clock: boolean
  q: boolean
  q_bar: boolean
  output: boolean
  constructor() {
    this.data = false
    this.clock = false
    this.q = false
    this.q_bar = false
    this.output = false
  }

  setData(data: boolean): void {
    this.data = data
    if (this.clock) {
      this.runCircuit()
    }
  }

  setClock(clock: boolean): void {
    this.clock = clock
    if (this.clock) {
      this.output = this.q
      this.runCircuit()
    }
  }

  private runCircuit(): void {
    const not_data = not_gate(this.data)
    const x0 = nand_gate(this.data, this.clock)
    const y0 = nand_gate(not_data, this.clock)

    const x1 = not_gate(x0)
    const y1 = not_gate(y0)

    this.q = nand_gate(x0, y1)
    this.q_bar = nand_gate(y0, x1)
  }
}