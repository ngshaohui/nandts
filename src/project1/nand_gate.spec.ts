import { nand_gate, NandGate } from "./nand_gate"
import { expect } from "chai"
import "mocha"

// TODO deprecate

describe("nand_gate test for: false false", () => {
  it("should return true", () => {
    const result = nand_gate(false, false)
    expect(result).to.equal(true)
  })
})

describe("nand_gate test for: false true", () => {
  it("should return true", () => {
    const result = nand_gate(false, true)
    expect(result).to.equal(true)
  })
})

describe("nand_gate test for: true false", () => {
  it("should return true", () => {
    const result = nand_gate(true, false)
    expect(result).to.equal(true)
  })
})

describe("nand_gate test for: true true", () => {
  it("should return false", () => {
    const result = nand_gate(true, true)
    expect(result).to.equal(false)
  })
})

// class
const nand = new NandGate()

describe("nand_gate test for: false false", () => {
  it("should return true", () => {
    nand.set(false, false)
    expect(nand.getOutput()).to.equal(true)
  })
})

describe("nand_gate test for: false true", () => {
  it("should return true", () => {
    nand.set(false, true)
    expect(nand.getOutput()).to.equal(true)
  })
})

describe("nand_gate test for: true false", () => {
  it("should return true", () => {
    nand.set(true, false)
    expect(nand.getOutput()).to.equal(true)
  })
})

describe("nand_gate test for: true true", () => {
  it("should return false", () => {
    nand.set(true, true)
    expect(nand.getOutput()).to.equal(false)
  })
})
