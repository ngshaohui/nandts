import { or_gate_8_way } from './or_gate_8_way'
import { expect } from 'chai'
import 'mocha'

describe('or_gate_8_way test for: all false', () => {

  it('should return false', () => {
    const result = or_gate_8_way(
      [false, false, false, false, false, false, false, false]
    )
    expect(result).to.equal(false)
  })

})

describe('or_gate_8_way test for: all true', () => {

  it('should return true', () => {
    const result = or_gate_8_way(
      [true, true, true, true, true, true, true, true]
    )
    expect(result).to.equal(true)
  })

})

describe('or_gate_8_way test for: one true, remaining false', () => {

  it('should return true', () => {
    const result = or_gate_8_way(
      [false, false, false, true, false, false, false, false]
    )
    expect(result).to.equal(true)
  })

})

describe('or_gate_8_way test for: one true, remaining false', () => {

  it('should return true', () => {
    const result = or_gate_8_way(
      [false, false, false, false, false, false, false, true]
    )
    expect(result).to.equal(true)
  })

})

describe('or_gate_8_way test for: three true, remaining false', () => {

  it('should return true', () => {
    const result = or_gate_8_way(
      [false, false, true, false, false, true, true, false]
    )
    expect(result).to.equal(true)
  })

})