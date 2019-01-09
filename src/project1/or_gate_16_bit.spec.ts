import { or_gate_16_bit } from './or_gate_16_bit'
import { expect } from 'chai'
import 'mocha'

describe('or_gate_16_bit test for: all false false', () => {

  it('should return all false', () => {
    const result = or_gate_16_bit(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    expect(result).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('or_gate_16_bit test for: all false false', () => {

  it('should return all false', () => {
    const result = or_gate_16_bit(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    )
    expect(result).to.deep.equal(
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    )
  })

})

describe('or_gate_16_bit test for: all false false', () => {

  it('should return all false', () => {
    const result = or_gate_16_bit(
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    )
    expect(result).to.deep.equal(
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    )
  })

})

describe('or_gate_16_bit test for: all false false', () => {

  it('should return all false', () => {
    const result = or_gate_16_bit(
      [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
    )
    expect(result).to.deep.equal(
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    )
  })

})

describe('or_gate_16_bit test for: all false false', () => {

  it('should return all false', () => {
    const result = or_gate_16_bit(
      [false, false, true, true, true, true, false, false, true, true, false, false, false, false, true, true],
      [false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false]
    )
    expect(result).to.deep.equal(
      [false, false, true, true, true, true, true, true, true, true, true, true, false, false, true, true]
    )
  })

})

describe('or_gate_16_bit test for: all false false', () => {

  it('should return all false', () => {
    const result = or_gate_16_bit(
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false],
      [true, false, false, true, true, false, false, false, false, true, true, true, false, true, true, false]
    )
    expect(result).to.deep.equal(
      [true, false, false, true, true, false, true, false, false, true, true, true, false, true, true, false]
    )
  })

})