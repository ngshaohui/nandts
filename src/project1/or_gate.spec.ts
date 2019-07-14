import { or_gate, OrGate } from "./or_gate"
import { expect } from "chai"
import "mocha"

describe("or_gate test for: false false", () => {
  it("should return false", () => {
    const result = or_gate(false, false)
    expect(result).to.equal(false)
  })
})

describe("or_gate test for: false true", () => {
  it("should return true", () => {
    const result = or_gate(false, true)
    expect(result).to.equal(true)
  })
})

describe("or_gate test for: true false", () => {
  it("should return true", () => {
    const result = or_gate(true, false)
    expect(result).to.equal(true)
  })
})

describe("or_gate test for: true true", () => {
  it("should return true", () => {
    const result = or_gate(true, true)
    expect(result).to.equal(true)
  })
})

// class

const or = new OrGate()

describe("or_gate test for: false false", () => {
  it("should return false", () => {
    or.set(false, false)
    expect(or.getOutput()).to.equal(false)
  })
})

describe("or_gate test for: false true", () => {
  it("should return true", () => {
    or.set(false, true)
    expect(or.getOutput()).to.equal(true)
  })
})

describe("or_gate test for: true false", () => {
  it("should return true", () => {
    or.set(true, false)
    expect(or.getOutput()).to.equal(true)
  })
})

describe("or_gate test for: true true", () => {
  it("should return true", () => {
    or.set(true, true)
    expect(or.getOutput()).to.equal(true)
  })
})
