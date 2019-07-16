import { unsignedDecToBin, decToBin, binToDec } from "./base_conversion"
import { expect } from "chai"
import "mocha"

// TODO
// edge cases like -127 to 127, 0

describe("test decToBin", () => {
  it("should convert 6 with 4 bits", () => {
    const res = decToBin(6, 4)
    expect(res).to.deep.equal([false, true, true, false])
  })
  it("should convert -6 with 4 bits", () => {
    const res = decToBin(-6, 4)
    expect(res).to.deep.equal([true, true, true, false])
  })
  it("should convert 6 with 8 bits", () => {
    const res = decToBin(6, 8)
    expect(res).to.deep.equal([
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      false
    ])
  })
  it("should convert -6 with 8 bits", () => {
    const res = decToBin(-6, 8)
    expect(res).to.deep.equal([
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      false
    ])
  })
})

describe("test binToDec", () => {
  it("should convert 6 with 4 bits", () => {
    const res = binToDec([false, true, true, false], 4)
    expect(res).to.deep.equal(6)
  })
  it("should convert -6 with 4 bits", () => {
    const res = binToDec([true, true, true, false], 4)
    expect(res).to.deep.equal(-6)
  })
  it("should convert 6 with 8 bits", () => {
    const res = binToDec(
      [false, false, false, false, false, true, true, false],
      8
    )
    expect(res).to.deep.equal(6)
  })
  it("should convert -6 with 8 bits", () => {
    const res = binToDec(
      [true, false, false, false, false, true, true, false],
      8
    )
    expect(res).to.deep.equal(-6)
  })
})
