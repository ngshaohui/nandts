import { not_gate } from './not_gate'
import { expect } from 'chai'
import 'mocha'

describe('not_gate test for: false', () => {

  it('should return true', () => {
    const result = not_gate(false)
    expect(result).to.equal(true)
  })

})

describe('not_gate test for: true', () => {

  it('should return false', () => {
    const result = not_gate(true)
    expect(result).to.equal(false)
  })

});