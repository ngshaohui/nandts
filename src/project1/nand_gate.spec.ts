import { nand_gate } from './nand_gate'
import { expect } from 'chai'
import 'mocha'

describe('nand_gate test for: false false', () => {

  it('should return true', () => {
    const result = nand_gate(false, false)
    expect(result).to.equal(true)
  })

})

describe('nand_gate test for: false true', () => {

  it('should return true', () => {
    const result = nand_gate(false, true)
    expect(result).to.equal(true)
  })

})

describe('nand_gate test for: true false', () => {

  it('should return true', () => {
    const result = nand_gate(true, false)
    expect(result).to.equal(true)
  })

})

describe('nand_gate test for: true true', () => {

  it('should return false', () => {
    const result = nand_gate(true, true)
    expect(result).to.equal(false)
  })

})