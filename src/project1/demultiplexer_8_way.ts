import { demultiplexer, Demultiplexer } from "./demultiplexer"
import { demultiplexer_4_way, Demultiplexer4Way } from "./demultiplexer_4_way"

export function demultiplexer_8_way(
  input: boolean,
  s0: boolean,
  s1: boolean,
  s2: boolean
) {
  const output = demultiplexer(input, s0)

  return demultiplexer_4_way(output[0], s1, s2).concat(
    demultiplexer_4_way(output[1], s1, s2)
  )
}

export class Demultiplexer8Way {
  input: boolean
  s0: boolean
  s1: boolean
  s2: boolean
  demux: Demultiplexer
  demux4Way1: Demultiplexer4Way
  demux4Way2: Demultiplexer4Way
  private output: [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean
  ]
  constructor() {
    this.input = false
    this.s0 = false
    this.s1 = false
    this.demux = new Demultiplexer()
    this.demux4Way1 = new Demultiplexer4Way()
    this.demux4Way2 = new Demultiplexer4Way()
    this.output = [false, false, false, false, false, false, false, false]
  }

  set(input: boolean, s0: boolean, s1: boolean, s2: boolean) {
    this.input = input
    this.s0 = s0
    this.s1 = s1
    this.s2 = s2
    this.runCircuit()
  }

  private runCircuit(): void {
    this.demux.set(this.input, this.s0)
    const demuxOut = this.demux.getOutput()
    this.demux4Way1.set(demuxOut[0], this.s1, this.s2)
    this.demux4Way2.set(demuxOut[1], this.s1, this.s2)
    const demux4Way1Out = this.demux4Way1.getOutput()
    const demux4Way2Out = this.demux4Way2.getOutput()

    this.output = [
      demux4Way1Out[0],
      demux4Way1Out[1],
      demux4Way1Out[2],
      demux4Way1Out[3],
      demux4Way2Out[0],
      demux4Way2Out[1],
      demux4Way2Out[2],
      demux4Way2Out[3]
    ]
  }

  getOutput(): [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean
  ] {
    return this.output
  }
}
