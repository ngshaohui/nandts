import { full_adder } from './full_adder'
import { expect } from 'chai'
import 'mocha'

describe('full_adder test for: false false false', () => {

  it('should return sum false carry false', () => {
    const result = full_adder(false, false, false)
    expect(result).to.deep.equal(
      [false, false]
    )
  })

})

describe('full_adder test for: false false true', () => {

  it('should return sum true carry false', () => {
    const result = full_adder(false, false, true)
    expect(result).to.deep.equal(
      [true, false]
    )
  })

})

describe('full_adder test for: false true false', () => {

  it('should return sum false carry false', () => {
    const result = full_adder(false, true, false)
    expect(result).to.deep.equal(
      [true, false]
    )
  })

})

describe('full_adder test for: false true true', () => {

  it('should return sum false carry false', () => {
    const result = full_adder(false, true, true)
    expect(result).to.deep.equal(
      [false, true]
    )
  })

})

describe('full_adder test for: true false false', () => {

  it('should return sum false carry false', () => {
    const result = full_adder(true, false, false)
    expect(result).to.deep.equal(
      [true, false]
    )
  })

})

describe('full_adder test for: true false true', () => {

  it('should return sum false carry false', () => {
    const result = full_adder(true, false, true)
    expect(result).to.deep.equal(
      [false, true]
    )
  })

})

describe('full_adder test for: true true false', () => {

  it('should return sum false carry false', () => {
    const result = full_adder(true, true, false)
    expect(result).to.deep.equal(
      [false, true]
    )
  })

})

describe('full_adder test for: true true true', () => {

  it('should return sum false carry false', () => {
    const result = full_adder(true, true, true)
    expect(result).to.deep.equal(
      [true, true]
    )
  })

})