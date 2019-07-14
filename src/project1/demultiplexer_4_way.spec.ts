import { demultiplexer_4_way, Demultiplexer4Way } from "./demultiplexer_4_way"
import { expect } from "chai"
import "mocha"

describe("demultiplexer_4_way test for: input false, sel false false", () => {
  it("should return false false false false", () => {
    const result = demultiplexer_4_way(false, false, false)
    expect(result).to.deep.equal([false, false, false, false])
  })
})

describe("demultiplexer_4_way test for: input false, sel false true", () => {
  it("should return false false false false", () => {
    const result = demultiplexer_4_way(false, false, true)
    expect(result).to.deep.equal([false, false, false, false])
  })
})

describe("demultiplexer_4_way test for: input false, sel true false", () => {
  it("should return false false false false", () => {
    const result = demultiplexer_4_way(false, true, false)
    expect(result).to.deep.equal([false, false, false, false])
  })
})

describe("demultiplexer_4_way test for: input false, sel true true", () => {
  it("should return false false false false", () => {
    const result = demultiplexer_4_way(false, true, true)
    expect(result).to.deep.equal([false, false, false, false])
  })
})

describe("demultiplexer_4_way test for: input true, sel false false", () => {
  it("should return true false false false", () => {
    const result = demultiplexer_4_way(true, false, false)
    expect(result).to.deep.equal([true, false, false, false])
  })
})

describe("demultiplexer_4_way test for: input true, sel false true", () => {
  it("should return false true false false", () => {
    const result = demultiplexer_4_way(true, false, true)
    expect(result).to.deep.equal([false, true, false, false])
  })
})

describe("demultiplexer_4_way test for: input true, sel true false", () => {
  it("should return false false true false", () => {
    const result = demultiplexer_4_way(true, true, false)
    expect(result).to.deep.equal([false, false, true, false])
  })
})

describe("demultiplexer_4_way test for: input true, sel true true", () => {
  it("should return false false false true", () => {
    const result = demultiplexer_4_way(true, true, true)
    expect(result).to.deep.equal([false, false, false, true])
  })
})

// class

const demux4Way = new Demultiplexer4Way()

describe("demultiplexer_4_way test for: input false, sel false false", () => {
  it("should return false false false false", () => {
    demux4Way.set(false, false, false)
    expect(demux4Way.getOutput()).to.deep.equal([false, false, false, false])
  })
})

describe("demultiplexer_4_way test for: input false, sel false true", () => {
  it("should return false false false false", () => {
    demux4Way.set(false, false, true)
    expect(demux4Way.getOutput()).to.deep.equal([false, false, false, false])
  })
})

describe("demultiplexer_4_way test for: input false, sel true false", () => {
  it("should return false false false false", () => {
    demux4Way.set(false, true, false)
    expect(demux4Way.getOutput()).to.deep.equal([false, false, false, false])
  })
})

describe("demultiplexer_4_way test for: input false, sel true true", () => {
  it("should return false false false false", () => {
    demux4Way.set(false, true, true)
    expect(demux4Way.getOutput()).to.deep.equal([false, false, false, false])
  })
})

describe("demultiplexer_4_way test for: input true, sel false false", () => {
  it("should return true false false false", () => {
    demux4Way.set(true, false, false)
    expect(demux4Way.getOutput()).to.deep.equal([true, false, false, false])
  })
})

describe("demultiplexer_4_way test for: input true, sel false true", () => {
  it("should return false true false false", () => {
    demux4Way.set(true, false, true)
    expect(demux4Way.getOutput()).to.deep.equal([false, true, false, false])
  })
})

describe("demultiplexer_4_way test for: input true, sel true false", () => {
  it("should return false false true false", () => {
    demux4Way.set(true, true, false)
    expect(demux4Way.getOutput()).to.deep.equal([false, false, true, false])
  })
})

describe("demultiplexer_4_way test for: input true, sel true true", () => {
  it("should return false false false true", () => {
    demux4Way.set(true, true, true)
    expect(demux4Way.getOutput()).to.deep.equal([false, false, false, true])
  })
})
