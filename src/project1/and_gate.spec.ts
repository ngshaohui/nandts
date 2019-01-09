import { and_gate } from './and_gate'
import { expect } from 'chai'
import 'mocha'

describe('and_gate test for: false false', () => {

  it('should return false', () => {
    const result = and_gate(false, false)
    expect(result).to.equal(false)
  })

})

describe('and_gate test for: false true', () => {

  it('should return false', () => {
    const result = and_gate(false, true)
    expect(result).to.equal(false)
  })

})

describe('and_gate test for: true false', () => {

  it('should return false', () => {
    const result = and_gate(true, false)
    expect(result).to.equal(false)
  })

})

describe('and_gate test for: true true', () => {

  it('should return true', () => {
    const result = and_gate(true, true)
    expect(result).to.equal(true)
  })

})