import { demultiplexer_8_way, Demultiplexer8Way } from "./demultiplexer_8_way"
import { expect } from "chai"
import "mocha"

describe("demultiplexer_8_way test for: input false, sel false false false", () => {
  it("should return false, false, false, false, false, false, false, false", () => {
    const result = demultiplexer_8_way(false, false, false, false)
    expect(result).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel false false true", () => {
  it("should return false false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(false, false, false, true)
    expect(result).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel false true false", () => {
  it("should return false false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(false, false, true, false)
    expect(result).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel false true true", () => {
  it("should return false false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(false, false, true, true)
    expect(result).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel true false false", () => {
  it("should return false false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(false, true, false, false)
    expect(result).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel true false true", () => {
  it("should return false false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(false, true, false, false)
    expect(result).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel true true false", () => {
  it("should return false false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(false, true, true, false)
    expect(result).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel true true true", () => {
  it("should return false false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(false, true, true, true)
    expect(result).to.deep.equal([
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

describe("demultiplexer_8_way test for: input true, sel false false false", () => {
  it("should return true false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(true, false, false, false)
    expect(result).to.deep.equal([
      true,
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

describe("demultiplexer_8_way test for: input true, sel false false true", () => {
  it("should return true false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(true, false, false, true)
    expect(result).to.deep.equal([
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel false true false", () => {
  it("should return true false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(true, false, true, false)
    expect(result).to.deep.equal([
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel false true true", () => {
  it("should return true false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(true, false, true, true)
    expect(result).to.deep.equal([
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel true false false", () => {
  it("should return true false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(true, true, false, false)
    expect(result).to.deep.equal([
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel true false true", () => {
  it("should return true false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(true, true, false, true)
    expect(result).to.deep.equal([
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel true true false", () => {
  it("should return true false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(true, true, true, false)
    expect(result).to.deep.equal([
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel true true true", () => {
  it("should return true false false false, false, false, false, false", () => {
    const result = demultiplexer_8_way(true, true, true, true)
    expect(result).to.deep.equal([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true
    ])
  })
})

// class

const demux8Way = new Demultiplexer8Way()

describe("demultiplexer_8_way test for: input false, sel false false false", () => {
  it("should return false, false, false, false, false, false, false, false", () => {
    demux8Way.set(false, false, false, false)
    expect(demux8Way.getOutput()).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel false false true", () => {
  it("should return false false false false, false, false, false, false", () => {
    demux8Way.set(false, false, false, true)
    expect(demux8Way.getOutput()).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel false true false", () => {
  it("should return false false false false, false, false, false, false", () => {
    demux8Way.set(false, false, true, false)
    expect(demux8Way.getOutput()).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel false true true", () => {
  it("should return false false false false, false, false, false, false", () => {
    demux8Way.set(false, false, true, true)
    expect(demux8Way.getOutput()).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel true false false", () => {
  it("should return false false false false, false, false, false, false", () => {
    demux8Way.set(false, true, false, false)
    expect(demux8Way.getOutput()).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel true false true", () => {
  it("should return false false false false, false, false, false, false", () => {
    demux8Way.set(false, true, false, false)
    expect(demux8Way.getOutput()).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel true true false", () => {
  it("should return false false false false, false, false, false, false", () => {
    demux8Way.set(false, true, true, false)
    expect(demux8Way.getOutput()).to.deep.equal([
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

describe("demultiplexer_8_way test for: input false, sel true true true", () => {
  it("should return false false false false, false, false, false, false", () => {
    demux8Way.set(false, true, true, true)
    expect(demux8Way.getOutput()).to.deep.equal([
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

describe("demultiplexer_8_way test for: input true, sel false false false", () => {
  it("should return true false false false, false, false, false, false", () => {
    demux8Way.set(true, false, false, false)
    expect(demux8Way.getOutput()).to.deep.equal([
      true,
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

describe("demultiplexer_8_way test for: input true, sel false false true", () => {
  it("should return true false false false, false, false, false, false", () => {
    demux8Way.set(true, false, false, true)
    expect(demux8Way.getOutput()).to.deep.equal([
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel false true false", () => {
  it("should return true false false false, false, false, false, false", () => {
    demux8Way.set(true, false, true, false)
    expect(demux8Way.getOutput()).to.deep.equal([
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel false true true", () => {
  it("should return true false false false, false, false, false, false", () => {
    demux8Way.set(true, false, true, true)
    expect(demux8Way.getOutput()).to.deep.equal([
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel true false false", () => {
  it("should return true false false false, false, false, false, false", () => {
    demux8Way.set(true, true, false, false)
    expect(demux8Way.getOutput()).to.deep.equal([
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel true false true", () => {
  it("should return true false false false, false, false, false, false", () => {
    demux8Way.set(true, true, false, true)
    expect(demux8Way.getOutput()).to.deep.equal([
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel true true false", () => {
  it("should return true false false false, false, false, false, false", () => {
    demux8Way.set(true, true, true, false)
    expect(demux8Way.getOutput()).to.deep.equal([
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false
    ])
  })
})

describe("demultiplexer_8_way test for: input true, sel true true true", () => {
  it("should return true false false false, false, false, false, false", () => {
    demux8Way.set(true, true, true, true)
    expect(demux8Way.getOutput()).to.deep.equal([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true
    ])
  })
})
