import { and_gate_16_bit } from '../project1/and_gate_16_bit'
import { adder_16_bit } from './adder_16_bit'
import { multiplexer_16_bit } from '../project1/multiplexer_16_bit'
import { not_gate_16_bit } from '../project1/not_gate_16_bit'
import { not_gate } from '../project1/not_gate'
import { or_gate_16_way } from '../project1/or_gate_16_way'

export function arithmetic_logic_unit(
  x: boolean[],
  y: boolean[],
  zx: boolean,
  nx: boolean,
  zy: boolean,
  ny: boolean,
  f: boolean, // 1 for ADD, 0 for AND
  no: boolean,
) {
  const true_16 = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
  const false_16 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

  // if zx, x = 0
  const x0 = multiplexer_16_bit(zx, x, false_16)
  // if nx, x = !x
  const x1 = multiplexer_16_bit(nx, x0, not_gate_16_bit(x0))
  // if zy, y = 0
  const y0 = multiplexer_16_bit(zy, y, false_16)
  // if ny, y = !y
  const y1 = multiplexer_16_bit(ny, y0, not_gate_16_bit(y0))

  // if f == 1, ADD
  const xaddy = adder_16_bit(x1, y1)
  // else AND
  const xandy = and_gate_16_bit(x1, y1)

  const res = multiplexer_16_bit(f, xandy, xaddy)
  // if no, out = !out
  const output = multiplexer_16_bit(no, res, not_gate_16_bit(res))

  // out[16], zr, ng
  return [
    output,
    not_gate(or_gate_16_way(output)),
    output[0]
  ]
}