import { arithmetic_logic_unit } from './arithmetic_logic_unit'
import { expect } from 'chai'
import 'mocha'

describe('arithmetic_logic_unit test for: | 0000000000000000 | 1111111111111111 | 1 | 0 | 1 | 0 | 1 | 0 |', () => {

  it('should return: | 0000000000000000 | 1 | 0 |', () => {
    const result = arithmetic_logic_unit(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      true,
      false,
      true,
      false,
      true,
      false
    )
    expect(result).to.deep.equal(
      [
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        true,
        false
      ]
    )
  })

})

describe('arithmetic_logic_unit test for: | 0000000000000000 | 1111111111111111 | 1 | 1 | 1 | 1 | 1 | 1 |', () => {

  it('should return: | 0000000000000001 | 0 | 0 |', () => {
    const result = arithmetic_logic_unit(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      true,
      true,
      true,
      true,
      true,
      true
    )
    expect(result).to.deep.equal(
      [
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true],
        false,
        false
      ]
    )
  })

})

describe('arithmetic_logic_unit test for: | 0000000000000000 | 1111111111111111 | 1 | 1 | 1 | 0 | 1 | 0 |', () => {

  it('should return: | 1111111111111111 | 0 | 1 |', () => {
    const result = arithmetic_logic_unit(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      true,
      true,
      true,
      false,
      true,
      false
    )
    expect(result).to.deep.equal(
      [
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        false,
        true
      ]
    )
  })

})

describe('arithmetic_logic_unit test for: | 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 0 | 0 |', () => {

  it('should return: | 0000000000000000 | 1 | 0 |', () => {
    const result = arithmetic_logic_unit(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      false,
      false,
      true,
      true,
      false,
      false
    )
    expect(result).to.deep.equal(
      [
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        true,
        false
      ]
    )
  })

})

// | 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 0 | 0 | 1111111111111111 | 0 | 1 |
// | 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 0 | 1 | 1111111111111111 | 0 | 1 |
// | 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 0 | 1 | 0000000000000000 | 1 | 0 |
// | 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 1 | 1 | 0000000000000000 | 1 | 0 |
// | 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 1 | 1 | 0000000000000001 | 0 | 0 |
// | 0000000000000000 | 1111111111111111 | 0 | 1 | 1 | 1 | 1 | 1 | 0000000000000001 | 0 | 0 |
// | 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 1 | 1 | 1 | 0000000000000000 | 1 | 0 |
// | 0000000000000000 | 1111111111111111 | 0 | 0 | 1 | 1 | 1 | 0 | 1111111111111111 | 0 | 1 |
// | 0000000000000000 | 1111111111111111 | 1 | 1 | 0 | 0 | 1 | 0 | 1111111111111110 | 0 | 1 |
// | 0000000000000000 | 1111111111111111 | 0 | 0 | 0 | 0 | 1 | 0 | 1111111111111111 | 0 | 1 |
// | 0000000000000000 | 1111111111111111 | 0 | 1 | 0 | 0 | 1 | 1 | 0000000000000001 | 0 | 0 |
// | 0000000000000000 | 1111111111111111 | 0 | 0 | 0 | 1 | 1 | 1 | 1111111111111111 | 0 | 1 |
// | 0000000000000000 | 1111111111111111 | 0 | 0 | 0 | 0 | 0 | 0 | 0000000000000000 | 1 | 0 |
// | 0000000000000000 | 1111111111111111 | 0 | 1 | 0 | 1 | 0 | 1 | 1111111111111111 | 0 | 1 |
// | 0000000000010001 | 0000000000000011 | 1 | 0 | 1 | 0 | 1 | 0 | 0000000000000000 | 1 | 0 |
// | 0000000000010001 | 0000000000000011 | 1 | 1 | 1 | 1 | 1 | 1 | 0000000000000001 | 0 | 0 |
// | 0000000000010001 | 0000000000000011 | 1 | 1 | 1 | 0 | 1 | 0 | 1111111111111111 | 0 | 1 |
// | 0000000000010001 | 0000000000000011 | 0 | 0 | 1 | 1 | 0 | 0 | 0000000000010001 | 0 | 0 |
// | 0000000000010001 | 0000000000000011 | 1 | 1 | 0 | 0 | 0 | 0 | 0000000000000011 | 0 | 0 |
// | 0000000000010001 | 0000000000000011 | 0 | 0 | 1 | 1 | 0 | 1 | 1111111111101110 | 0 | 1 |
// | 0000000000010001 | 0000000000000011 | 1 | 1 | 0 | 0 | 0 | 1 | 1111111111111100 | 0 | 1 |
// | 0000000000010001 | 0000000000000011 | 0 | 0 | 1 | 1 | 1 | 1 | 1111111111101111 | 0 | 1 |
// | 0000000000010001 | 0000000000000011 | 1 | 1 | 0 | 0 | 1 | 1 | 1111111111111101 | 0 | 1 |
// | 0000000000010001 | 0000000000000011 | 0 | 1 | 1 | 1 | 1 | 1 | 0000000000010010 | 0 | 0 |
// | 0000000000010001 | 0000000000000011 | 1 | 1 | 0 | 1 | 1 | 1 | 0000000000000100 | 0 | 0 |
// | 0000000000010001 | 0000000000000011 | 0 | 0 | 1 | 1 | 1 | 0 | 0000000000010000 | 0 | 0 |
// | 0000000000010001 | 0000000000000011 | 1 | 1 | 0 | 0 | 1 | 0 | 0000000000000010 | 0 | 0 |
// | 0000000000010001 | 0000000000000011 | 0 | 0 | 0 | 0 | 1 | 0 | 0000000000010100 | 0 | 0 |
// | 0000000000010001 | 0000000000000011 | 0 | 1 | 0 | 0 | 1 | 1 | 0000000000001110 | 0 | 0 |
// | 0000000000010001 | 0000000000000011 | 0 | 0 | 0 | 1 | 1 | 1 | 1111111111110010 | 0 | 1 |
// | 0000000000010001 | 0000000000000011 | 0 | 0 | 0 | 0 | 0 | 0 | 0000000000000001 | 0 | 0 |
// | 0000000000010001 | 0000000000000011 | 0 | 1 | 0 | 1 | 0 | 1 | 0000000000010011 | 0 | 0 |