import { multiplexer_16_bit } from './multiplexer_16_bit'
import { expect } from 'chai'
import 'mocha'

describe('multiplexer_16_bit test for: sel false, all false false', () => {

  it('should return all false', () => {
    const result = multiplexer_16_bit(
      false,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    expect(result).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_16_bit test for: sel false, all false false', () => {

  it('should return all false', () => {
    const result = multiplexer_16_bit(
      true,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    expect(result).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_16_bit test for: sel false, all false false', () => {

  it('should return all false', () => {
    const result = multiplexer_16_bit(
      false,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false]
    )
    expect(result).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_16_bit test for: sel false, all false false', () => {

  it('should return all false', () => {
    const result = multiplexer_16_bit(
      true,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false]
    )
    expect(result).to.deep.equal(
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false]
    )
  })

})

describe('multiplexer_16_bit test for: sel false, all false false', () => {

  it('should return all false', () => {
    const result = multiplexer_16_bit(
      false,
      [true, false, false, true, true, false, false, false, false, true, true, true, false, true, true, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    expect(result).to.deep.equal(
      [true, false, false, true, true, false, false, false, false, true, true, true, false, true, true, false]
    )
  })

})

describe('multiplexer_16_bit test for: sel false, all false false', () => {

  it('should return all false', () => {
    const result = multiplexer_16_bit(
      true,
      [true, false, false, true, true, false, false, false, false, true, true, true, false, true, true, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    expect(result).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_16_bit test for: sel false, all false false', () => {

  it('should return all false', () => {
    const result = multiplexer_16_bit(
      false,
      [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
    )
    expect(result).to.deep.equal(
      [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
    )
  })

})

describe('multiplexer_16_bit test for: sel false, all false false', () => {

  it('should return all false', () => {
    const result = multiplexer_16_bit(
      true,
      [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
    )
    expect(result).to.deep.equal(
      [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
    )
  })

})