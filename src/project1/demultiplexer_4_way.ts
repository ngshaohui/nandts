import { demultiplexer, Demultiplexer } from "./demultiplexer"

export function demultiplexer_4_way(input: boolean, s0: boolean, s1: boolean) {
  const output = demultiplexer(input, s0)

  return demultiplexer(output[0], s1).concat(demultiplexer(output[1], s1))
}

export class Demultiplexer4Way {
  input: boolean
  s0: boolean
  s1: boolean
  demux1: Demultiplexer
  demux2: Demultiplexer
  demux3: Demultiplexer
  private output: [boolean, boolean, boolean, boolean]
  constructor() {
    this.input = false
    this.s0 = false
    this.s1 = false
    this.demux1 = new Demultiplexer()
    this.demux2 = new Demultiplexer()
    this.demux3 = new Demultiplexer()
    this.output = [false, false, false, false]
  }

  set(input: boolean, s0: boolean, s1: boolean) {
    this.input = input
    this.s0 = s0
    this.s1 = s1
    this.runCircuit()
  }

  private runCircuit(): void {
    this.demux1.set(this.input, this.s0)
    const out1 = this.demux1.getOutput()
    this.demux2.set(out1[0], this.s1)
    this.demux3.set(out1[1], this.s1)
    const out2 = this.demux2.getOutput()
    const out3 = this.demux3.getOutput()

    this.output = [out2[0], out2[1], out3[0], out3[1]]
  }

  getOutput(): [boolean, boolean, boolean, boolean] {
    return this.output
  }
}
