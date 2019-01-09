import { demultiplexer } from './demultiplexer'
import { demultiplexer_4_way } from './demultiplexer_4_way'

export function demultiplexer_8_way(input: boolean,
  s0: boolean, s1: boolean, s2: boolean
) {
  const output = demultiplexer(input, s0)

  return demultiplexer_4_way(output[0], s1, s2).concat(demultiplexer_4_way(output[1], s1, s2))
}