import { Ram8Register16Bit } from "./ram_8_register_16_bit"
import { Demultiplexer8Way } from "../project1/demultiplexer_8_way"
import { Multiplexer8Way16Bit } from "../project1/multiplexer_8_way_16_bit"
import { decToBin, binToDec, unsignedDecToBin } from "../utils/base_conversion"

export class Ram64Register16Bit {
  input: boolean[]
  load: boolean
  clock: boolean
  address: boolean[] // 0 based index
  demux8Way: Demultiplexer8Way
  mux8Way16Bit: Multiplexer8Way16Bit
  ram8reg1: Ram8Register16Bit
  ram8reg2: Ram8Register16Bit
  ram8reg3: Ram8Register16Bit
  ram8reg4: Ram8Register16Bit
  ram8reg5: Ram8Register16Bit
  ram8reg6: Ram8Register16Bit
  ram8reg7: Ram8Register16Bit
  ram8reg8: Ram8Register16Bit
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
    this.address = [false, false, false, false, false, false]
    this.load = false
    this.clock = false
    this.demux8Way = new Demultiplexer8Way()
    this.mux8Way16Bit = new Multiplexer8Way16Bit()
    this.ram8reg1 = new Ram8Register16Bit()
    this.ram8reg2 = new Ram8Register16Bit()
    this.ram8reg3 = new Ram8Register16Bit()
    this.ram8reg4 = new Ram8Register16Bit()
    this.ram8reg5 = new Ram8Register16Bit()
    this.ram8reg6 = new Ram8Register16Bit()
    this.ram8reg7 = new Ram8Register16Bit()
    this.ram8reg8 = new Ram8Register16Bit()
    this.sel = [false, false, false, false, false, false, false, false]
  }

  setInput(input_dec: number): void {
    this.input = decToBin(input_dec, 16)
    this.ram8reg1.setInput(input_dec)
    this.ram8reg2.setInput(input_dec)
    this.ram8reg3.setInput(input_dec)
    this.ram8reg4.setInput(input_dec)
    this.ram8reg5.setInput(input_dec)
    this.ram8reg6.setInput(input_dec)
    this.ram8reg7.setInput(input_dec)
    this.ram8reg8.setInput(input_dec)
  }

  setLoad(load: boolean): void {
    this.load = load
    this.setRegisterLoad()
  }

  setClock(clock: boolean): void {
    this.clock = clock
    this.ram8reg1.setClock(clock)
    this.ram8reg2.setClock(clock)
    this.ram8reg3.setClock(clock)
    this.ram8reg4.setClock(clock)
    this.ram8reg5.setClock(clock)
    this.ram8reg6.setClock(clock)
    this.ram8reg7.setClock(clock)
    this.ram8reg8.setClock(clock)
  }

  setAddress = (address: number): void => {
    this.address = unsignedDecToBin(address, 6)
    this.setRegisterLoad()
  }

  private setRegisterLoad = (): void => {
    this.demux8Way.set(
      this.load,
      this.address[3],
      this.address[4],
      this.address[5]
    )
    this.sel = this.demux8Way.getOutput()

    const address = [this.address[0], this.address[1], this.address[2]]
    this.ram8reg1.setAddress(address)
    this.ram8reg2.setAddress(address)
    this.ram8reg3.setAddress(address)
    this.ram8reg4.setAddress(address)
    this.ram8reg5.setAddress(address)
    this.ram8reg6.setAddress(address)
    this.ram8reg7.setAddress(address)
    this.ram8reg8.setAddress(address)

    this.ram8reg1.setLoad(this.sel[0])
    this.ram8reg2.setLoad(this.sel[1])
    this.ram8reg3.setLoad(this.sel[2])
    this.ram8reg4.setLoad(this.sel[3])
    this.ram8reg5.setLoad(this.sel[4])
    this.ram8reg6.setLoad(this.sel[5])
    this.ram8reg7.setLoad(this.sel[6])
    this.ram8reg8.setLoad(this.sel[7])
  }

  getDecOutput(): number {
    this.mux8Way16Bit.setCurcuit(
      this.address[3],
      this.address[4],
      this.address[5],
      this.ram8reg1.getOutput(),
      this.ram8reg2.getOutput(),
      this.ram8reg3.getOutput(),
      this.ram8reg4.getOutput(),
      this.ram8reg5.getOutput(),
      this.ram8reg6.getOutput(),
      this.ram8reg7.getOutput(),
      this.ram8reg8.getOutput()
    )
    return binToDec(this.mux8Way16Bit.getOutput(), 16)
  }
}
