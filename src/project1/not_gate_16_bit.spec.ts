import { not_gate_16_bit, NotGate16Bit } from "./not_gate_16_bit"
import { expect } from "chai"
import "mocha"

describe("not_gate_16_bit test for: all false", () => {
  it("should return all true", () => {
    const result = not_gate_16_bit([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ])
    expect(result).to.deep.equal([
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true
    ])
  })
})

describe("not_gate_16_bit test for: all false", () => {
  it("should return all true", () => {
    const result = not_gate_16_bit([
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true
    ])
    expect(result).to.deep.equal([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ])
  })
})

describe("not_gate_16_bit test for: all false", () => {
  it("should return all true", () => {
    const result = not_gate_16_bit([
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false
    ])
    expect(result).to.deep.equal([
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true
    ])
  })
})

describe("not_gate_16_bit test for: all false", () => {
  it("should return all true", () => {
    const result = not_gate_16_bit([
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      true,
      true
    ])
    expect(result).to.deep.equal([
      true,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      false
    ])
  })
})

describe("not_gate_16_bit test for: all false", () => {
  it("should return all true", () => {
    const result = not_gate_16_bit([
      false,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false
    ])
    expect(result).to.deep.equal([
      true,
      true,
      true,
      false,
      true,
      true,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      false,
      true,
      true
    ])
  })
})

// class

const notGate16Bit = new NotGate16Bit()

describe("not_gate_16_bit test for: all false", () => {
  it("should return all true", () => {
    notGate16Bit.set([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ])
    expect(notGate16Bit.getOutput()).to.deep.equal([
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true
    ])
  })
})

describe("not_gate_16_bit test for: all false", () => {
  it("should return all true", () => {
    notGate16Bit.set([
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true
    ])
    expect(notGate16Bit.getOutput()).to.deep.equal([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ])
  })
})

describe("not_gate_16_bit test for: all false", () => {
  it("should return all true", () => {
    notGate16Bit.set([
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false
    ])
    expect(notGate16Bit.getOutput()).to.deep.equal([
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true
    ])
  })
})

describe("not_gate_16_bit test for: all false", () => {
  it("should return all true", () => {
    notGate16Bit.set([
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      true,
      true
    ])
    expect(notGate16Bit.getOutput()).to.deep.equal([
      true,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      false
    ])
  })
})

describe("not_gate_16_bit test for: all false", () => {
  it("should return all true", () => {
    notGate16Bit.set([
      false,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false
    ])
    expect(notGate16Bit.getOutput()).to.deep.equal([
      true,
      true,
      true,
      false,
      true,
      true,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      false,
      true,
      true
    ])
  })
})
