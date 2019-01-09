import { demultiplexer } from './demultiplexer'
import { expect } from 'chai'
import 'mocha'

describe('demultiplexer test for: false false', () => {

  it('should return false false', () => {
    const result = demultiplexer(false, false)
    expect(result).to.deep.equal(
      [false, false]
    )
  })

})

describe('demultiplexer test for: false true', () => {

  it('should return false true', () => {
    const result = demultiplexer(false, true)
    expect(result).to.deep.equal(
      [false, false]
    )
  })

})

describe('demultiplexer test for: true false', () => {

  it('should return false false', () => {
    const result = demultiplexer(true, false)
    expect(result).to.deep.equal(
      [true, false]
    )
  })

})

describe('demultiplexer test for: true true', () => {

  it('should return true false', () => {
    const result = demultiplexer(true, true)
    expect(result).to.deep.equal(
      [false, true]
    )
  })

})