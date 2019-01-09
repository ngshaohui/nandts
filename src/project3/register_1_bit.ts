import { d_flip_flop } from './d_flip_flop'
import { multiplexerClass } from '../project1/multiplexer'

// should use a class since state has to be retained
export class register_1_bit {
  dff: d_flip_flop
  mux: multiplexerClass
  input: boolean
  load: boolean
  clock: boolean
  output: boolean
  constructor() {
    // TODO determine and standardise casing for class names
    this.dff = new d_flip_flop()
    this.mux = new multiplexerClass()
    this.input = false
    this.load = false
    this.clock = false
    this.output = false
  }

  setInput(input: boolean): void {
    this.input = input
    this.runCircuit()
  }

  setLoad(load: boolean): void {
    this.load = load
    this.runCircuit()
  }

  setClock(clock: boolean): void {
    this.clock = clock
    this.runCircuit()
  }

  private runCircuit(): void {
    this.mux.set(this.load, this.output, this.input)
    const x0 = this.mux.output
    this.dff.setData(x0)
    this.dff.setClock(this.clock)
    this.output = this.dff.output
  }
}