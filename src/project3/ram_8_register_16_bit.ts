import { Register16Bit } from "./register_16_bit"
import { Demultiplexer8Way } from "../project1/demultiplexer_8_way"
import { Multiplexer8Way16Bit } from "../project1/multiplexer_8_way_16_bit"
import { decToBin, binToDec, unsignedDecToBin } from "../utils/base_conversion"

export class Ram8Register16Bit {
  input: boolean[]
  load: boolean
  clock: boolean
  address: boolean[] // 0 based index
  demux8Way: Demultiplexer8Way
  mux8Way16Bit: Multiplexer8Way16Bit
  reg16Bit1: Register16Bit
  reg16Bit2: Register16Bit
  reg16Bit3: Register16Bit
  reg16Bit4: Register16Bit
  reg16Bit5: Register16Bit
  reg16Bit6: Register16Bit
  reg16Bit7: Register16Bit
  reg16Bit8: Register16Bit
  sel: boolean[]
  constructor() {
    this.input = [
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
    ]
    this.address = [false, false, false]
    this.load = false
    this.clock = false
    this.demux8Way = new Demultiplexer8Way()
    this.mux8Way16Bit = new Multiplexer8Way16Bit()
    this.reg16Bit1 = new Register16Bit()
    this.reg16Bit2 = new Register16Bit()
    this.reg16Bit3 = new Register16Bit()
    this.reg16Bit4 = new Register16Bit()
    this.reg16Bit5 = new Register16Bit()
    this.reg16Bit6 = new Register16Bit()
    this.reg16Bit7 = new Register16Bit()
    this.reg16Bit8 = new Register16Bit()
    this.sel = [false, false, false, false, false, false, false, false]
  }

  setInput(input_dec: number): void {
    this.input = decToBin(input_dec, 16)
    this.reg16Bit1.setInput(input_dec)
    this.reg16Bit2.setInput(input_dec)
    this.reg16Bit3.setInput(input_dec)
    this.reg16Bit4.setInput(input_dec)
    this.reg16Bit5.setInput(input_dec)
    this.reg16Bit6.setInput(input_dec)
    this.reg16Bit7.setInput(input_dec)
    this.reg16Bit8.setInput(input_dec)
  }

  setLoad(load: boolean): void {
    this.load = load
    this.setRegisterLoad()
  }

  setClock(clock: boolean): void {
    this.clock = clock
    this.reg16Bit1.setClock(clock)
    this.reg16Bit2.setClock(clock)
    this.reg16Bit3.setClock(clock)
    this.reg16Bit4.setClock(clock)
    this.reg16Bit5.setClock(clock)
    this.reg16Bit6.setClock(clock)
    this.reg16Bit7.setClock(clock)
    this.reg16Bit8.setClock(clock)
  }

  setAddress = (address: boolean[]): void => {
    this.address = address
  }

  setDecAddress = (address: number): void => {
    this.address = unsignedDecToBin(address, 3)
    this.setRegisterLoad()
  }

  private setRegisterLoad = (): void => {
    this.demux8Way.set(
      this.load,
      this.address[0],
      this.address[1],
      this.address[2]
    )
    this.sel = this.demux8Way.getOutput()
    this.reg16Bit1.setLoad(this.sel[0])
    this.reg16Bit2.setLoad(this.sel[1])
    this.reg16Bit3.setLoad(this.sel[2])
    this.reg16Bit4.setLoad(this.sel[3])
    this.reg16Bit5.setLoad(this.sel[4])
    this.reg16Bit6.setLoad(this.sel[5])
    this.reg16Bit7.setLoad(this.sel[6])
    this.reg16Bit8.setLoad(this.sel[7])
  }

  getOutput(): boolean[] {
    this.mux8Way16Bit.setCurcuit(
      this.address[0],
      this.address[1],
      this.address[2],
      this.reg16Bit1.getOutput(),
      this.reg16Bit2.getOutput(),
      this.reg16Bit3.getOutput(),
      this.reg16Bit4.getOutput(),
      this.reg16Bit5.getOutput(),
      this.reg16Bit6.getOutput(),
      this.reg16Bit7.getOutput(),
      this.reg16Bit8.getOutput()
    )

    return this.mux8Way16Bit.getOutput()
  }

  getDecOutput(): number {
    this.mux8Way16Bit.setCurcuit(
      this.address[0],
      this.address[1],
      this.address[2],
      this.reg16Bit1.getOutput(),
      this.reg16Bit2.getOutput(),
      this.reg16Bit3.getOutput(),
      this.reg16Bit4.getOutput(),
      this.reg16Bit5.getOutput(),
      this.reg16Bit6.getOutput(),
      this.reg16Bit7.getOutput(),
      this.reg16Bit8.getOutput()
    )
    return binToDec(this.mux8Way16Bit.getOutput(), 16)
  }
}
