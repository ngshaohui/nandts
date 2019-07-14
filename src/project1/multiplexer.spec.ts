import { multiplexer, Multiplexer } from "./multiplexer"
import { expect } from "chai"
import "mocha"

describe("multiplexer test for: false false false", () => {
  it("should return false", () => {
    const result = multiplexer(false, false, false)
    expect(result).to.equal(false)
  })
})

describe("multiplexer test for: false false true", () => {
  it("should return false", () => {
    const result = multiplexer(false, false, true)
    expect(result).to.equal(false)
  })
})

describe("multiplexer test for: false true false", () => {
  it("should return true", () => {
    const result = multiplexer(false, true, false)
    expect(result).to.equal(true)
  })
})

describe("multiplexer test for: false true true", () => {
  it("should return true", () => {
    const result = multiplexer(false, true, true)
    expect(result).to.equal(true)
  })
})

describe("multiplexer test for: true false false", () => {
  it("should return false", () => {
    const result = multiplexer(true, false, false)
    expect(result).to.equal(false)
  })
})

describe("multiplexer test for: true false true", () => {
  it("should return true", () => {
    const result = multiplexer(true, false, true)
    expect(result).to.equal(true)
  })
})

describe("multiplexer test for: true true false", () => {
  it("should return false", () => {
    const result = multiplexer(true, true, false)
    expect(result).to.equal(false)
  })
})

describe("multiplexer test for: true true true", () => {
  it("should return true", () => {
    const result = multiplexer(true, true, true)
    expect(result).to.equal(true)
  })
})

// multiplexer class tests
const mux = new Multiplexer()

describe("multiplexer test for: false false false", () => {
  it("should return false", () => {
    mux.set(false, false, false)
    expect(mux.getOutput()).to.equal(false)
  })
})

describe("multiplexer test for: false false true", () => {
  it("should return false", () => {
    mux.set(false, false, true)
    expect(mux.getOutput()).to.equal(false)
  })
})

describe("multiplexer test for: false true false", () => {
  it("should return true", () => {
    mux.set(false, true, false)
    expect(mux.getOutput()).to.equal(true)
  })
})

describe("multiplexer test for: false true true", () => {
  it("should return true", () => {
    mux.set(false, true, true)
    expect(mux.getOutput()).to.equal(true)
  })
})

describe("multiplexer test for: true false false", () => {
  it("should return false", () => {
    mux.set(true, false, false)
    expect(mux.getOutput()).to.equal(false)
  })
})

describe("multiplexer test for: true false true", () => {
  it("should return true", () => {
    mux.set(true, false, true)
    expect(mux.getOutput()).to.equal(true)
  })
})

describe("multiplexer test for: true true false", () => {
  it("should return false", () => {
    mux.set(true, true, false)
    expect(mux.getOutput()).to.equal(false)
  })
})

describe("multiplexer test for: true true true", () => {
  it("should return true", () => {
    mux.set(true, true, true)
    expect(mux.getOutput()).to.equal(true)
  })
})
