import { incrementer_16_bit } from './incrementer_16_bit'
import { expect } from 'chai'
import 'mocha'

describe('incrementer_16_bit test for:', () => {

  it('should return input plus one', () => {
    const result = incrementer_16_bit(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    expect(result).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true]
    )
  })

})

describe('incrementer_16_bit test for:', () => {

  it('should return input plus one', () => {
    const result = incrementer_16_bit(
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    )
    expect(result).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('incrementer_16_bit test for:', () => {

  it('should return input plus one', () => {
    const result = incrementer_16_bit(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true]
    )
    expect(result).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false]
    )
  })

})

describe('incrementer_16_bit test for:', () => {

  it('should return input plus one', () => {
    const result = incrementer_16_bit(
      [true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true]
    )
    expect(result).to.deep.equal(
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false]
    )
  })

})