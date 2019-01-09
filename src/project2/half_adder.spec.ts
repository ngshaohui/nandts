import { half_adder } from './half_adder'
import { expect } from 'chai'
import 'mocha'

describe('half_adder test for: false false', () => {

  it('should return sum false carry false', () => {
    const result = half_adder(false, false)
    expect(result).to.deep.equal(
      [false, false]
    )
  })

})

describe('half_adder test for: false true', () => {

  it('should return sum true carry false', () => {
    const result = half_adder(false, true)
    expect(result).to.deep.equal(
      [true, false]
    )
  })

})

describe('half_adder test for: true false', () => {

  it('should return sum true carry false', () => {
    const result = half_adder(true, false)
    expect(result).to.deep.equal(
      [true, false]
    )
  })

})

describe('half_adder test for: true true', () => {

  it('should return sum false carry true', () => {
    const result = half_adder(true, true)
    expect(result).to.deep.equal(
      [false, true]
    )
  })

})