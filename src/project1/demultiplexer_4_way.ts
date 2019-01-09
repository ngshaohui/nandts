import { demultiplexer } from './demultiplexer'

export function demultiplexer_4_way(input: boolean, s0: boolean, s1: boolean) {
  const output = demultiplexer(input, s0)

  return demultiplexer(output[0], s1).concat(demultiplexer(output[1], s1))
}