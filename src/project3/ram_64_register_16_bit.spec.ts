import { Ram64Register16Bit } from "./ram_64_register_16_bit"
import { expect } from "chai"
import "mocha"

const circuit = new Ram64Register16Bit()

// | time |   in   |load |address|  out   |
// | 0+   |      0 |  0  |   0   |      0 |
describe("Ram64Register16Bit", () => {
  describe("1 Ram64Register16Bit test for: set clock true", () => {
    it("should return: 0", () => {
      circuit.setClock(true)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 1    |      0 |  0  |   0   |      0 |
  describe("2 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 0", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 1+   |      0 |  1  |   0   |      0 |
  describe("3 Ram64Register16Bit test for: set clock true, load true", () => {
    it("should return: 0", () => {
      circuit.setClock(true)
      circuit.setLoad(true)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 2    |      0 |  1  |   0   |      0 |
  describe("4 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 0", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 2+   |   1313 |  0  |    0  |      0 |
  describe("5 Ram64Register16Bit test for: set clock true, input 1313, load false", () => {
    it("should return: 0", () => {
      circuit.setClock(true)
      circuit.setInput(1313)
      circuit.setLoad(false)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 3    |   1313 |  0  |    0  |      0 |
  describe("6 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 0", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 3+   |   1313 |  1  |   13  |      0 |
  describe("7 Ram64Register16Bit test for: set clock true, load true, address 13", () => {
    it("should return: 0", () => {
      circuit.setClock(true)
      circuit.setLoad(true)
      circuit.setAddress(13)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 4    |   1313 |  1  |   13  |   1313 |
  describe("8 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 1313", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(1313)
    })
  })
  // | 4+   |   1313 |  0  |    0  |      0 |
  describe("9 Ram64Register16Bit test for: set clock true, load false, address 0", () => {
    it("should return: 0", () => {
      circuit.setClock(true)
      circuit.setLoad(false)
      circuit.setAddress(0)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 5    |   1313 |  0  |    0  |      0 |
  describe("10 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 0", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 5+   |   4747 |  0  |   47  |      0 |
  describe("11 Ram64Register16Bit test for: set clock true, input 4747, address 47", () => {
    it("should return: 0", () => {
      circuit.setClock(true)
      circuit.setInput(4747)
      circuit.setAddress(47)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 6    |   4747 |  0  |   47  |      0 |
  describe("12 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 0", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 6+   |   4747 |  1  |   47  |      0 |
  describe("13 Ram64Register16Bit test for: set clock true, load true", () => {
    it("should return: 0", () => {
      circuit.setClock(true)
      circuit.setLoad(true)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 7    |   4747 |  1  |   47  |   4747 |
  describe("14 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 4747", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(4747)
    })
  })
  // | 7+   |   4747 |  0  |   47  |   4747 |
  describe("15 Ram64Register16Bit test for: set clock true, load false", () => {
    it("should return: 4747", () => {
      circuit.setClock(true)
      circuit.setLoad(false)
      expect(circuit.getDecOutput()).to.equal(4747)
    })
  })
  // | 8    |   4747 |  0  |   47  |   4747 |
  describe("16 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 4747", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(4747)
    })
  })
  // | 8    |   4747 |  0  |   13  |   1313 |
  describe("17 Ram64Register16Bit test for: set address 13", () => {
    it("should return: 1313", () => {
      circuit.setAddress(13)
      expect(circuit.getDecOutput()).to.equal(1313)
    })
  })
  // | 8+   |   6363 |  0  |   13  |   1313 |
  describe("18 Ram64Register16Bit test for: set clock true, input 6363", () => {
    it("should return: 1313", () => {
      circuit.setClock(true)
      circuit.setInput(6363)
      expect(circuit.getDecOutput()).to.equal(1313)
    })
  })
  // | 9    |   6363 |  0  |   13  |   1313 |
  describe("19 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 1313", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(1313)
    })
  })
  // | 9+   |   6363 |  1  |   63  |      0 |
  describe("20 Ram64Register16Bit test for: set clock true, load true, address 63", () => {
    it("should return: 0", () => {
      circuit.setClock(true)
      circuit.setLoad(true)
      circuit.setAddress(63)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 10   |   6363 |  1  |   63  |   6363 |
  describe("21 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 6363", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(6363)
    })
  })
  // | 10+  |   6363 |  0  |   63  |   6363 |
  describe("22 Ram64Register16Bit test for: set clock true, load false", () => {
    it("should return: 6363", () => {
      circuit.setClock(true)
      circuit.setLoad(false)
      expect(circuit.getDecOutput()).to.equal(6363)
    })
  })
  // | 11   |   6363 |  0  |   63  |   6363 |
  describe("23 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 6363", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(6363)
    })
  })
  // | 11   |   6363 |  0  |   47  |   4747 |
  describe("24 Ram64Register16Bit test for: set address 47", () => {
    it("should return: 4747", () => {
      circuit.setAddress(47)
      expect(circuit.getDecOutput()).to.equal(4747)
    })
  })
  // | 11   |   6363 |  0  |   63  |   6363 |
  describe("25 Ram64Register16Bit test for: set address 63", () => {
    it("should return: 6363", () => {
      circuit.setAddress(63)
      expect(circuit.getDecOutput()).to.equal(6363)
    })
  })
  // | 11+  |   6363 |  0  |   40  |      0 |
  describe("26 Ram64Register16Bit test for: set clock true, address 40", () => {
    it("should return: 0", () => {
      circuit.setClock(true)
      circuit.setAddress(40)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 12   |   6363 |  0  |   40  |      0 |
  describe("27 Ram64Register16Bit test for: set clock false", () => {
    it("should return: 0", () => {
      circuit.setClock(false)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 12   |   6363 |  0  |   41  |      0 |
  describe("28 Ram64Register16Bit test for: set address 41", () => {
    it("should return: 0", () => {
      circuit.setAddress(41)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 12   |   6363 |  0  |   42  |      0 |
  describe("29 Ram64Register16Bit test for: set address 42", () => {
    it("should return: 0", () => {
      circuit.setAddress(42)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 12   |   6363 |  0  |   43  |      0 |
  describe("30 Ram64Register16Bit test for: set address 43", () => {
    it("should return: 0", () => {
      circuit.setAddress(43)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 12   |   6363 |  0  |   44  |      0 |
  describe("31 Ram64Register16Bit test for: set address 44", () => {
    it("should return: 0", () => {
      circuit.setAddress(44)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 12   |   6363 |  0  |   45  |      0 |
  describe("32 Ram64Register16Bit test for: set address 45", () => {
    it("should return: 0", () => {
      circuit.setAddress(45)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 12   |   6363 |  0  |   46  |      0 |
  describe("33 Ram64Register16Bit test for: set address 46", () => {
    it("should return: 0", () => {
      circuit.setAddress(46)
      expect(circuit.getDecOutput()).to.equal(0)
    })
  })
  // | 12   |   6363 |  0  |   47  |   4747 |
  describe("34 Ram64Register16Bit test for: set address 47", () => {
    it("should return: 4747", () => {
      circuit.setAddress(47)
      expect(circuit.getDecOutput()).to.equal(4747)
    })
  })
  // | 12+  |  21845 |  1  |   40  |      0 |
  // | 13   |  21845 |  1  |   40  |  21845 |
  // | 13+  |  21845 |  1  |   41  |      0 |
  // | 14   |  21845 |  1  |   41  |  21845 |
  // | 14+  |  21845 |  1  |   42  |      0 |
  // | 15   |  21845 |  1  |   42  |  21845 |
  // | 15+  |  21845 |  1  |   43  |      0 |
  // | 16   |  21845 |  1  |   43  |  21845 |
  // | 16+  |  21845 |  1  |   44  |      0 |
  // | 17   |  21845 |  1  |   44  |  21845 |
  // | 17+  |  21845 |  1  |   45  |      0 |
  // | 18   |  21845 |  1  |   45  |  21845 |
  // | 18+  |  21845 |  1  |   46  |      0 |
  // | 19   |  21845 |  1  |   46  |  21845 |
  // | 19+  |  21845 |  1  |   47  |   4747 |
  // | 20   |  21845 |  1  |   47  |  21845 |
  // | 20+  |  21845 |  0  |   40  |  21845 |
  // | 21   |  21845 |  0  |   40  |  21845 |
  // | 21   |  21845 |  0  |   41  |  21845 |
  // | 21   |  21845 |  0  |   42  |  21845 |
  // | 21   |  21845 |  0  |   43  |  21845 |
  // | 21   |  21845 |  0  |   44  |  21845 |
  // | 21   |  21845 |  0  |   45  |  21845 |
  // | 21   |  21845 |  0  |   46  |  21845 |
  // | 21   |  21845 |  0  |   47  |  21845 |
  // | 21+  | -21846 |  1  |   40  |  21845 |
  // | 22   | -21846 |  1  |   40  | -21846 |
  // | 22+  | -21846 |  0  |   40  | -21846 |
  // | 23   | -21846 |  0  |   40  | -21846 |
  // | 23   | -21846 |  0  |   41  |  21845 |
  // | 23   | -21846 |  0  |   42  |  21845 |
  // | 23   | -21846 |  0  |   43  |  21845 |
  // | 23   | -21846 |  0  |   44  |  21845 |
  // | 23   | -21846 |  0  |   45  |  21845 |
  // | 23   | -21846 |  0  |   46  |  21845 |
  // | 23   | -21846 |  0  |   47  |  21845 |
  // | 23+  |  21845 |  1  |   40  | -21846 |
  // | 24   |  21845 |  1  |   40  |  21845 |
  // | 24+  | -21846 |  1  |   41  |  21845 |
  // | 25   | -21846 |  1  |   41  | -21846 |
  // | 25+  | -21846 |  0  |   40  |  21845 |
  // | 26   | -21846 |  0  |   40  |  21845 |
  // | 26   | -21846 |  0  |   41  | -21846 |
  // | 26   | -21846 |  0  |   42  |  21845 |
  // | 26   | -21846 |  0  |   43  |  21845 |
  // | 26   | -21846 |  0  |   44  |  21845 |
  // | 26   | -21846 |  0  |   45  |  21845 |
  // | 26   | -21846 |  0  |   46  |  21845 |
  // | 26   | -21846 |  0  |   47  |  21845 |
  // | 26+  |  21845 |  1  |   41  | -21846 |
  // | 27   |  21845 |  1  |   41  |  21845 |
  // | 27+  | -21846 |  1  |   42  |  21845 |
  // | 28   | -21846 |  1  |   42  | -21846 |
  // | 28+  | -21846 |  0  |   40  |  21845 |
  // | 29   | -21846 |  0  |   40  |  21845 |
  // | 29   | -21846 |  0  |   41  |  21845 |
  // | 29   | -21846 |  0  |   42  | -21846 |
  // | 29   | -21846 |  0  |   43  |  21845 |
  // | 29   | -21846 |  0  |   44  |  21845 |
  // | 29   | -21846 |  0  |   45  |  21845 |
  // | 29   | -21846 |  0  |   46  |  21845 |
  // | 29   | -21846 |  0  |   47  |  21845 |
  // | 29+  |  21845 |  1  |   42  | -21846 |
  // | 30   |  21845 |  1  |   42  |  21845 |
  // | 30+  | -21846 |  1  |   43  |  21845 |
  // | 31   | -21846 |  1  |   43  | -21846 |
  // | 31+  | -21846 |  0  |   40  |  21845 |
  // | 32   | -21846 |  0  |   40  |  21845 |
  // | 32   | -21846 |  0  |   41  |  21845 |
  // | 32   | -21846 |  0  |   42  |  21845 |
  // | 32   | -21846 |  0  |   43  | -21846 |
  // | 32   | -21846 |  0  |   44  |  21845 |
  // | 32   | -21846 |  0  |   45  |  21845 |
  // | 32   | -21846 |  0  |   46  |  21845 |
  // | 32   | -21846 |  0  |   47  |  21845 |
  // | 32+  |  21845 |  1  |   43  | -21846 |
  // | 33   |  21845 |  1  |   43  |  21845 |
  // | 33+  | -21846 |  1  |   44  |  21845 |
  // | 34   | -21846 |  1  |   44  | -21846 |
  // | 34+  | -21846 |  0  |   40  |  21845 |
  // | 35   | -21846 |  0  |   40  |  21845 |
  // | 35   | -21846 |  0  |   41  |  21845 |
  // | 35   | -21846 |  0  |   42  |  21845 |
  // | 35   | -21846 |  0  |   43  |  21845 |
  // | 35   | -21846 |  0  |   44  | -21846 |
  // | 35   | -21846 |  0  |   45  |  21845 |
  // | 35   | -21846 |  0  |   46  |  21845 |
  // | 35   | -21846 |  0  |   47  |  21845 |
  // | 35+  |  21845 |  1  |   44  | -21846 |
  // | 36   |  21845 |  1  |   44  |  21845 |
  // | 36+  | -21846 |  1  |   45  |  21845 |
  // | 37   | -21846 |  1  |   45  | -21846 |
  // | 37+  | -21846 |  0  |   40  |  21845 |
  // | 38   | -21846 |  0  |   40  |  21845 |
  // | 38   | -21846 |  0  |   41  |  21845 |
  // | 38   | -21846 |  0  |   42  |  21845 |
  // | 38   | -21846 |  0  |   43  |  21845 |
  // | 38   | -21846 |  0  |   44  |  21845 |
  // | 38   | -21846 |  0  |   45  | -21846 |
  // | 38   | -21846 |  0  |   46  |  21845 |
  // | 38   | -21846 |  0  |   47  |  21845 |
  // | 38+  |  21845 |  1  |   45  | -21846 |
  // | 39   |  21845 |  1  |   45  |  21845 |
  // | 39+  | -21846 |  1  |   46  |  21845 |
  // | 40   | -21846 |  1  |   46  | -21846 |
  // | 40+  | -21846 |  0  |   40  |  21845 |
  // | 41   | -21846 |  0  |   40  |  21845 |
  // | 41   | -21846 |  0  |   41  |  21845 |
  // | 41   | -21846 |  0  |   42  |  21845 |
  // | 41   | -21846 |  0  |   43  |  21845 |
  // | 41   | -21846 |  0  |   44  |  21845 |
  // | 41   | -21846 |  0  |   45  |  21845 |
  // | 41   | -21846 |  0  |   46  | -21846 |
  // | 41   | -21846 |  0  |   47  |  21845 |
  // | 41+  |  21845 |  1  |   46  | -21846 |
  // | 42   |  21845 |  1  |   46  |  21845 |
  // | 42+  | -21846 |  1  |   47  |  21845 |
  // | 43   | -21846 |  1  |   47  | -21846 |
  // | 43+  | -21846 |  0  |   40  |  21845 |
  // | 44   | -21846 |  0  |   40  |  21845 |
  // | 44   | -21846 |  0  |   41  |  21845 |
  // | 44   | -21846 |  0  |   42  |  21845 |
  // | 44   | -21846 |  0  |   43  |  21845 |
  // | 44   | -21846 |  0  |   44  |  21845 |
  // | 44   | -21846 |  0  |   45  |  21845 |
  // | 44   | -21846 |  0  |   46  |  21845 |
  // | 44   | -21846 |  0  |   47  | -21846 |
  // | 44+  |  21845 |  1  |   47  | -21846 |
  // | 45   |  21845 |  1  |   47  |  21845 |
  // | 45+  |  21845 |  0  |   40  |  21845 |
  // | 46   |  21845 |  0  |   40  |  21845 |
  // | 46   |  21845 |  0  |   41  |  21845 |
  // | 46   |  21845 |  0  |   42  |  21845 |
  // | 46   |  21845 |  0  |   43  |  21845 |
  // | 46   |  21845 |  0  |   44  |  21845 |
  // | 46   |  21845 |  0  |   45  |  21845 |
  // | 46   |  21845 |  0  |   46  |  21845 |
  // | 46   |  21845 |  0  |   47  |  21845 |
  // | 46+  |  21845 |  0  |    5  |      0 |
  // | 47   |  21845 |  0  |    5  |      0 |
  // | 47   |  21845 |  0  |   13  |   1313 |
  // | 47   |  21845 |  0  |   21  |      0 |
  // | 47   |  21845 |  0  |   29  |      0 |
  // | 47   |  21845 |  0  |   37  |      0 |
  // | 47   |  21845 |  0  |   45  |  21845 |
  // | 47   |  21845 |  0  |   53  |      0 |
  // | 47   |  21845 |  0  |   61  |      0 |
  // | 47+  |  21845 |  1  |    5  |      0 |
  // | 48   |  21845 |  1  |    5  |  21845 |
  // | 48+  |  21845 |  1  |   13  |   1313 |
  // | 49   |  21845 |  1  |   13  |  21845 |
  // | 49+  |  21845 |  1  |   21  |      0 |
  // | 50   |  21845 |  1  |   21  |  21845 |
  // | 50+  |  21845 |  1  |   29  |      0 |
  // | 51   |  21845 |  1  |   29  |  21845 |
  // | 51+  |  21845 |  1  |   37  |      0 |
  // | 52   |  21845 |  1  |   37  |  21845 |
  // | 52+  |  21845 |  1  |   45  |  21845 |
  // | 53   |  21845 |  1  |   45  |  21845 |
  // | 53+  |  21845 |  1  |   53  |      0 |
  // | 54   |  21845 |  1  |   53  |  21845 |
  // | 54+  |  21845 |  1  |   61  |      0 |
  // | 55   |  21845 |  1  |   61  |  21845 |
  // | 55+  |  21845 |  0  |    5  |  21845 |
  // | 56   |  21845 |  0  |    5  |  21845 |
  // | 56   |  21845 |  0  |   13  |  21845 |
  // | 56   |  21845 |  0  |   21  |  21845 |
  // | 56   |  21845 |  0  |   29  |  21845 |
  // | 56   |  21845 |  0  |   37  |  21845 |
  // | 56   |  21845 |  0  |   45  |  21845 |
  // | 56   |  21845 |  0  |   53  |  21845 |
  // | 56   |  21845 |  0  |   61  |  21845 |
  // | 56+  | -21846 |  1  |    5  |  21845 |
  // | 57   | -21846 |  1  |    5  | -21846 |
  // | 57+  | -21846 |  0  |    5  | -21846 |
  // | 58   | -21846 |  0  |    5  | -21846 |
  // | 58   | -21846 |  0  |   13  |  21845 |
  // | 58   | -21846 |  0  |   21  |  21845 |
  // | 58   | -21846 |  0  |   29  |  21845 |
  // | 58   | -21846 |  0  |   37  |  21845 |
  // | 58   | -21846 |  0  |   45  |  21845 |
  // | 58   | -21846 |  0  |   53  |  21845 |
  // | 58   | -21846 |  0  |   61  |  21845 |
  // | 58+  |  21845 |  1  |    5  | -21846 |
  // | 59   |  21845 |  1  |    5  |  21845 |
  // | 59+  | -21846 |  1  |   13  |  21845 |
  // | 60   | -21846 |  1  |   13  | -21846 |
  // | 60+  | -21846 |  0  |    5  |  21845 |
  // | 61   | -21846 |  0  |    5  |  21845 |
  // | 61   | -21846 |  0  |   13  | -21846 |
  // | 61   | -21846 |  0  |   21  |  21845 |
  // | 61   | -21846 |  0  |   29  |  21845 |
  // | 61   | -21846 |  0  |   37  |  21845 |
  // | 61   | -21846 |  0  |   45  |  21845 |
  // | 61   | -21846 |  0  |   53  |  21845 |
  // | 61   | -21846 |  0  |   61  |  21845 |
  // | 61+  |  21845 |  1  |   13  | -21846 |
  // | 62   |  21845 |  1  |   13  |  21845 |
  // | 62+  | -21846 |  1  |   21  |  21845 |
  // | 63   | -21846 |  1  |   21  | -21846 |
  // | 63+  | -21846 |  0  |    5  |  21845 |
  // | 64   | -21846 |  0  |    5  |  21845 |
  // | 64   | -21846 |  0  |   13  |  21845 |
  // | 64   | -21846 |  0  |   21  | -21846 |
  // | 64   | -21846 |  0  |   29  |  21845 |
  // | 64   | -21846 |  0  |   37  |  21845 |
  // | 64   | -21846 |  0  |   45  |  21845 |
  // | 64   | -21846 |  0  |   53  |  21845 |
  // | 64   | -21846 |  0  |   61  |  21845 |
  // | 64+  |  21845 |  1  |   21  | -21846 |
  // | 65   |  21845 |  1  |   21  |  21845 |
  // | 65+  | -21846 |  1  |   29  |  21845 |
  // | 66   | -21846 |  1  |   29  | -21846 |
  // | 66+  | -21846 |  0  |    5  |  21845 |
  // | 67   | -21846 |  0  |    5  |  21845 |
  // | 67   | -21846 |  0  |   13  |  21845 |
  // | 67   | -21846 |  0  |   21  |  21845 |
  // | 67   | -21846 |  0  |   29  | -21846 |
  // | 67   | -21846 |  0  |   37  |  21845 |
  // | 67   | -21846 |  0  |   45  |  21845 |
  // | 67   | -21846 |  0  |   53  |  21845 |
  // | 67   | -21846 |  0  |   61  |  21845 |
  // | 67+  |  21845 |  1  |   29  | -21846 |
  // | 68   |  21845 |  1  |   29  |  21845 |
  // | 68+  | -21846 |  1  |   37  |  21845 |
  // | 69   | -21846 |  1  |   37  | -21846 |
  // | 69+  | -21846 |  0  |    5  |  21845 |
  // | 70   | -21846 |  0  |    5  |  21845 |
  // | 70   | -21846 |  0  |   13  |  21845 |
  // | 70   | -21846 |  0  |   21  |  21845 |
  // | 70   | -21846 |  0  |   29  |  21845 |
  // | 70   | -21846 |  0  |   37  | -21846 |
  // | 70   | -21846 |  0  |   45  |  21845 |
  // | 70   | -21846 |  0  |   53  |  21845 |
  // | 70   | -21846 |  0  |   61  |  21845 |
  // | 70+  |  21845 |  1  |   37  | -21846 |
  // | 71   |  21845 |  1  |   37  |  21845 |
  // | 71+  | -21846 |  1  |   45  |  21845 |
  // | 72   | -21846 |  1  |   45  | -21846 |
  // | 72+  | -21846 |  0  |    5  |  21845 |
  // | 73   | -21846 |  0  |    5  |  21845 |
  // | 73   | -21846 |  0  |   13  |  21845 |
  // | 73   | -21846 |  0  |   21  |  21845 |
  // | 73   | -21846 |  0  |   29  |  21845 |
  // | 73   | -21846 |  0  |   37  |  21845 |
  // | 73   | -21846 |  0  |   45  | -21846 |
  // | 73   | -21846 |  0  |   53  |  21845 |
  // | 73   | -21846 |  0  |   61  |  21845 |
  // | 73+  |  21845 |  1  |   45  | -21846 |
  // | 74   |  21845 |  1  |   45  |  21845 |
  // | 74+  | -21846 |  1  |   53  |  21845 |
  // | 75   | -21846 |  1  |   53  | -21846 |
  // | 75+  | -21846 |  0  |    5  |  21845 |
  // | 76   | -21846 |  0  |    5  |  21845 |
  // | 76   | -21846 |  0  |   13  |  21845 |
  // | 76   | -21846 |  0  |   21  |  21845 |
  // | 76   | -21846 |  0  |   29  |  21845 |
  // | 76   | -21846 |  0  |   37  |  21845 |
  // | 76   | -21846 |  0  |   45  |  21845 |
  // | 76   | -21846 |  0  |   53  | -21846 |
  // | 76   | -21846 |  0  |   61  |  21845 |
  // | 76+  |  21845 |  1  |   53  | -21846 |
  // | 77   |  21845 |  1  |   53  |  21845 |
  // | 77+  | -21846 |  1  |   61  |  21845 |
  // | 78   | -21846 |  1  |   61  | -21846 |
  // | 78+  | -21846 |  0  |    5  |  21845 |
  // | 79   | -21846 |  0  |    5  |  21845 |
  // | 79   | -21846 |  0  |   13  |  21845 |
  // | 79   | -21846 |  0  |   21  |  21845 |
  // | 79   | -21846 |  0  |   29  |  21845 |
  // | 79   | -21846 |  0  |   37  |  21845 |
  // | 79   | -21846 |  0  |   45  |  21845 |
  // | 79   | -21846 |  0  |   53  |  21845 |
  // | 79   | -21846 |  0  |   61  | -21846 |
  // | 79+  |  21845 |  1  |   61  | -21846 |
  // | 80   |  21845 |  1  |   61  |  21845 |
  // | 80+  |  21845 |  0  |    5  |  21845 |
  // | 81   |  21845 |  0  |    5  |  21845 |
  // | 81   |  21845 |  0  |   13  |  21845 |
  // | 81   |  21845 |  0  |   21  |  21845 |
  // | 81   |  21845 |  0  |   29  |  21845 |
  // | 81   |  21845 |  0  |   37  |  21845 |
  // | 81   |  21845 |  0  |   45  |  21845 |
  // | 81   |  21845 |  0  |   53  |  21845 |
  // | 81   |  21845 |  0  |   61  |  21845 |
})
