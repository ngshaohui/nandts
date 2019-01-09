import { xor_gate } from './xor_gate'
import { expect } from 'chai'
import 'mocha'

describe('xor_gate test for: false false', () => {

  it('should return false', () => {
    const result = xor_gate(false, false)
    expect(result).to.equal(false)
  })

})

describe('xor_gate test for: false true', () => {

  it('should return true', () => {
    const result = xor_gate(false, true)
    expect(result).to.equal(true)
  })

})

describe('xor_gate test for: true false', () => {

  it('should return true', () => {
    const result = xor_gate(true, false)
    expect(result).to.equal(true)
  })

})

describe('xor_gate test for: true true', () => {

  it('should return false', () => {
    const result = xor_gate(true, true)
    expect(result).to.equal(false)
  })

})