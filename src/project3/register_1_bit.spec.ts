import { register_1_bit } from "./register_1_bit"
import { expect } from "chai"
import "mocha"

const circuit = new register_1_bit()

// | 0+   |  0  |  0  |  0  |
// initial: clock false, in false, load false, out false
describe("1 register_1_bit test for: set clock true", () => {
  it("should return: false", () => {
    circuit.setClock(true)
    expect(circuit.getOutput()).to.equal(false)
  })
})

// | 1    |  0  |  0  |  0  |
// initial: clock true, in false, load false, out false
describe("2 register_1_bit test for: set clock false", () => {
  it("should return: false", () => {
    circuit.setClock(false)
    expect(circuit.getOutput()).to.equal(false)
  })
})

// | 1+   |  0  |  1  |  0  |
// initial: clock false, in false, load false, out false
describe("3 register_1_bit test for: set load true, clock true", () => {
  it("should return: false", () => {
    circuit.setLoad(true)
    circuit.setClock(true)
    expect(circuit.getOutput()).to.equal(false)
  })
})

// | 2    |  0  |  1  |  0  |
// initial: clock true, in false, load true, out false
describe("4 register_1_bit test for: set clock false", () => {
  it("should return: false", () => {
    circuit.setClock(false)
    expect(circuit.getOutput()).to.equal(false)
  })
})

// | 2+   |  1  |  0  |  0  |
// initial: clock false, in false, load true, out false
describe("5 register_1_bit test for: set input true, load false, clock true", () => {
  it("should return: false", () => {
    circuit.setInput(true)
    circuit.setLoad(false)
    circuit.setClock(true)
    expect(circuit.getOutput()).to.equal(false)
  })
})

// | 3    |  1  |  0  |  0  |
// initial: clock true, in true, load false, out false
describe("6 register_1_bit test for: set clock false", () => {
  it("should return: false", () => {
    circuit.setClock(false)
    expect(circuit.getOutput()).to.equal(false)
  })
})

// | 3+   |  1  |  1  |  0  |
// initial: clock false, in true, load false, out false
describe("7 register_1_bit test for: set load true, clock true", () => {
  it("should return: false", () => {
    circuit.setLoad(true)
    circuit.setClock(true)
    expect(circuit.getOutput()).to.equal(false)
  })
})

// | 4    |  1  |  1  |  1  |
// initial: clock true, in true, load true, out false
describe("8 register_1_bit test for: set load true, clock true", () => {
  it("should return: true", () => {
    circuit.setClock(false)
    expect(circuit.getOutput()).to.equal(true)
  })
})

// | 4+   |  0  |  0  |  1  |
// initial: clock false, in true, load true, out true
describe("9 register_1_bit test for: set load true, clock true", () => {
  it("should return: true", () => {
    circuit.setLoad(false)
    circuit.setInput(false)
    circuit.setClock(true)
    expect(circuit.getOutput()).to.equal(true)
  })
})

// | 5    |  0  |  0  |  1  |
// initial: clock true, in true, load false, out true
describe("10 register_1_bit test for: set clock true, load true", () => {
  it("should return: true", () => {
    circuit.setClock(false)
    expect(circuit.getOutput()).to.equal(true)
  })
})

// | 5+   |  1  |  0  |  1  |
// initial: clock false, in false, load false, out true
describe("11 register_1_bit test for: set clock true, in true", () => {
  it("should return: true", () => {
    circuit.setClock(true)
    circuit.setInput(true)
    expect(circuit.getOutput()).to.equal(true)
  })
})

// | 6    |  1  |  0  |  1  |
describe("12 register_1_bit test for: set clock false", () => {
  it("should return: true", () => {
    circuit.setClock(false)
    expect(circuit.getOutput()).to.equal(true)
  })
})

// | 6+   |  0  |  1  |  1  |
describe("13 register_1_bit test for: set clock true, in false, load true", () => {
  it("should return: true", () => {
    circuit.setClock(true)
    circuit.setInput(false)
    circuit.setLoad(true)
    expect(circuit.getOutput()).to.equal(true)
  })
})

// | 7    |  0  |  1  |  0  |
describe("14 register_1_bit test for: set clock false", () => {
  it("should return: false", () => {
    circuit.setClock(false)
    expect(circuit.getOutput()).to.equal(false)
  })
})

// | 7+   |  1  |  1  |  0  |
describe("15 register_1_bit test for: set clock true, in true", () => {
  it("should return: false", () => {
    circuit.setClock(true)
    circuit.setInput(true)
    expect(circuit.getOutput()).to.equal(false)
  })
})

// | 8    |  1  |  1  |  1  |
describe("16 register_1_bit test for: set clock false", () => {
  it("should return: true", () => {
    circuit.setClock(false)
    expect(circuit.getOutput()).to.equal(true)
  })
})

// | 8+   |  0  |  0  |  1  |
describe("17 register_1_bit test for: set clock true, in false, load false", () => {
  it("should return: true", () => {
    circuit.setClock(true)
    circuit.setInput(false)
    circuit.setLoad(false)
    expect(circuit.getOutput()).to.equal(true)
  })
})

// | 9    |  0  |  0  |  1  |
describe("18 register_1_bit test for: set clock false", () => {
  it("should return: true", () => {
    circuit.setClock(false)
    expect(circuit.getOutput()).to.equal(true)
  })
})

// | time | in  |load | out |
// | 9+   |  0  |  0  |  1  |
// | 10   |  0  |  0  |  1  |
// | 10+  |  0  |  0  |  1  |
// | 11   |  0  |  0  |  1  |
// | 11+  |  0  |  0  |  1  |
// | 12   |  0  |  0  |  1  |
// | 12+  |  0  |  0  |  1  |
// | 13   |  0  |  0  |  1  |
// | 13+  |  0  |  0  |  1  |
// | 14   |  0  |  0  |  1  |
// | 14+  |  0  |  0  |  1  |
// | 15   |  0  |  0  |  1  |
// | 15+  |  0  |  0  |  1  |
// | 16   |  0  |  0  |  1  |
// | 16+  |  0  |  0  |  1  |
// | 17   |  0  |  0  |  1  |
// | 17+  |  0  |  0  |  1  |
// | 18   |  0  |  0  |  1  |
// | 18+  |  0  |  0  |  1  |
// | 19   |  0  |  0  |  1  |
// | 19+  |  0  |  0  |  1  |
// | 20   |  0  |  0  |  1  |
// | 20+  |  0  |  0  |  1  |
// | 21   |  0  |  0  |  1  |
// | 21+  |  0  |  0  |  1  |
// | 22   |  0  |  0  |  1  |
// | 22+  |  0  |  0  |  1  |
// | 23   |  0  |  0  |  1  |
// | 23+  |  0  |  0  |  1  |
// | 24   |  0  |  0  |  1  |
// | 24+  |  0  |  0  |  1  |
// | 25   |  0  |  0  |  1  |
// | 25+  |  0  |  0  |  1  |
// | 26   |  0  |  0  |  1  |
// | 26+  |  0  |  0  |  1  |
// | 27   |  0  |  0  |  1  |
// | 27+  |  0  |  0  |  1  |
// | 28   |  0  |  0  |  1  |
// | 28+  |  0  |  0  |  1  |
// | 29   |  0  |  0  |  1  |
// | 29+  |  0  |  0  |  1  |
// | 30   |  0  |  0  |  1  |
// | 30+  |  0  |  0  |  1  |
// | 31   |  0  |  0  |  1  |
// | 31+  |  0  |  0  |  1  |
// | 32   |  0  |  0  |  1  |
// | 32+  |  0  |  0  |  1  |
// | 33   |  0  |  0  |  1  |
// | 33+  |  0  |  0  |  1  |
// | 34   |  0  |  0  |  1  |
// | 34+  |  0  |  0  |  1  |
// | 35   |  0  |  0  |  1  |
// | 35+  |  0  |  0  |  1  |
// | 36   |  0  |  0  |  1  |
// | 36+  |  0  |  0  |  1  |
// | 37   |  0  |  0  |  1  |
// | 37+  |  0  |  0  |  1  |
// | 38   |  0  |  0  |  1  |
// | 38+  |  0  |  0  |  1  |
// | 39   |  0  |  0  |  1  |
// | 39+  |  0  |  0  |  1  |
// | 40   |  0  |  0  |  1  |
// | 40+  |  0  |  0  |  1  |
// | 41   |  0  |  0  |  1  |
// | 41+  |  0  |  0  |  1  |
// | 42   |  0  |  0  |  1  |
// | 42+  |  0  |  0  |  1  |
// | 43   |  0  |  0  |  1  |
// | 43+  |  0  |  0  |  1  |
// | 44   |  0  |  0  |  1  |
// | 44+  |  0  |  0  |  1  |
// | 45   |  0  |  0  |  1  |
// | 45+  |  0  |  0  |  1  |
// | 46   |  0  |  0  |  1  |
// | 46+  |  0  |  0  |  1  |
// | 47   |  0  |  0  |  1  |
// | 47+  |  0  |  0  |  1  |
// | 48   |  0  |  0  |  1  |
// | 48+  |  0  |  0  |  1  |
// | 49   |  0  |  0  |  1  |
// | 49+  |  0  |  0  |  1  |
// | 50   |  0  |  0  |  1  |
// | 50+  |  0  |  0  |  1  |
// | 51   |  0  |  0  |  1  |
// | 51+  |  0  |  0  |  1  |
// | 52   |  0  |  0  |  1  |
// | 52+  |  0  |  0  |  1  |
// | 53   |  0  |  0  |  1  |
// | 53+  |  0  |  0  |  1  |
// | 54   |  0  |  0  |  1  |
// | 54+  |  0  |  0  |  1  |
// | 55   |  0  |  0  |  1  |
// | 55+  |  0  |  0  |  1  |
// | 56   |  0  |  0  |  1  |
// | 56+  |  0  |  0  |  1  |
// | 57   |  0  |  0  |  1  |
// | 57+  |  0  |  1  |  1  |
// | 58   |  0  |  1  |  0  |
// | 58+  |  1  |  0  |  0  |
// | 59   |  1  |  0  |  0  |
// | 59+  |  1  |  0  |  0  |
// | 60   |  1  |  0  |  0  |
// | 60+  |  1  |  0  |  0  |
// | 61   |  1  |  0  |  0  |
// | 61+  |  1  |  0  |  0  |
// | 62   |  1  |  0  |  0  |
// | 62+  |  1  |  0  |  0  |
// | 63   |  1  |  0  |  0  |
// | 63+  |  1  |  0  |  0  |
// | 64   |  1  |  0  |  0  |
// | 64+  |  1  |  0  |  0  |
// | 65   |  1  |  0  |  0  |
// | 65+  |  1  |  0  |  0  |
// | 66   |  1  |  0  |  0  |
// | 66+  |  1  |  0  |  0  |
// | 67   |  1  |  0  |  0  |
// | 67+  |  1  |  0  |  0  |
// | 68   |  1  |  0  |  0  |
// | 68+  |  1  |  0  |  0  |
// | 69   |  1  |  0  |  0  |
// | 69+  |  1  |  0  |  0  |
// | 70   |  1  |  0  |  0  |
// | 70+  |  1  |  0  |  0  |
// | 71   |  1  |  0  |  0  |
// | 71+  |  1  |  0  |  0  |
// | 72   |  1  |  0  |  0  |
// | 72+  |  1  |  0  |  0  |
// | 73   |  1  |  0  |  0  |
// | 73+  |  1  |  0  |  0  |
// | 74   |  1  |  0  |  0  |
// | 74+  |  1  |  0  |  0  |
// | 75   |  1  |  0  |  0  |
// | 75+  |  1  |  0  |  0  |
// | 76   |  1  |  0  |  0  |
// | 76+  |  1  |  0  |  0  |
// | 77   |  1  |  0  |  0  |
// | 77+  |  1  |  0  |  0  |
// | 78   |  1  |  0  |  0  |
// | 78+  |  1  |  0  |  0  |
// | 79   |  1  |  0  |  0  |
// | 79+  |  1  |  0  |  0  |
// | 80   |  1  |  0  |  0  |
// | 80+  |  1  |  0  |  0  |
// | 81   |  1  |  0  |  0  |
// | 81+  |  1  |  0  |  0  |
// | 82   |  1  |  0  |  0  |
// | 82+  |  1  |  0  |  0  |
// | 83   |  1  |  0  |  0  |
// | 83+  |  1  |  0  |  0  |
// | 84   |  1  |  0  |  0  |
// | 84+  |  1  |  0  |  0  |
// | 85   |  1  |  0  |  0  |
// | 85+  |  1  |  0  |  0  |
// | 86   |  1  |  0  |  0  |
// | 86+  |  1  |  0  |  0  |
// | 87   |  1  |  0  |  0  |
// | 87+  |  1  |  0  |  0  |
// | 88   |  1  |  0  |  0  |
// | 88+  |  1  |  0  |  0  |
// | 89   |  1  |  0  |  0  |
// | 89+  |  1  |  0  |  0  |
// | 90   |  1  |  0  |  0  |
// | 90+  |  1  |  0  |  0  |
// | 91   |  1  |  0  |  0  |
// | 91+  |  1  |  0  |  0  |
// | 92   |  1  |  0  |  0  |
// | 92+  |  1  |  0  |  0  |
// | 93   |  1  |  0  |  0  |
// | 93+  |  1  |  0  |  0  |
// | 94   |  1  |  0  |  0  |
// | 94+  |  1  |  0  |  0  |
// | 95   |  1  |  0  |  0  |
// | 95+  |  1  |  0  |  0  |
// | 96   |  1  |  0  |  0  |
// | 96+  |  1  |  0  |  0  |
// | 97   |  1  |  0  |  0  |
// | 97+  |  1  |  0  |  0  |
// | 98   |  1  |  0  |  0  |
// | 98+  |  1  |  0  |  0  |
// | 99   |  1  |  0  |  0  |
// | 99+  |  1  |  0  |  0  |
// | 100  |  1  |  0  |  0  |
// | 100+ |  1  |  0  |  0  |
// | 101  |  1  |  0  |  0  |
// | 101+ |  1  |  0  |  0  |
// | 102  |  1  |  0  |  0  |
// | 102+ |  1  |  0  |  0  |
// | 103  |  1  |  0  |  0  |
// | 103+ |  1  |  0  |  0  |
// | 104  |  1  |  0  |  0  |
// | 104+ |  1  |  0  |  0  |
// | 105  |  1  |  0  |  0  |
// | 105+ |  1  |  0  |  0  |
// | 106  |  1  |  0  |  0  |
// | 106+ |  1  |  0  |  0  |
// | 107  |  1  |  0  |  0  |
