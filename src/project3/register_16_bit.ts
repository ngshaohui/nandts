import { register_1_bit } from "./register_1_bit"

const NUM_BITS = 16

// should use a class since state has to be retained
export class Register16Bit {
  reg_0: register_1_bit
  reg_1: register_1_bit
  reg_2: register_1_bit
  reg_3: register_1_bit
  reg_4: register_1_bit
  reg_5: register_1_bit
  reg_6: register_1_bit
  reg_7: register_1_bit
  reg_8: register_1_bit
  reg_9: register_1_bit
  reg_10: register_1_bit
  reg_11: register_1_bit
  reg_12: register_1_bit
  reg_13: register_1_bit
  reg_14: register_1_bit
  reg_15: register_1_bit
  input: boolean[]
  load: boolean
  clock: boolean
  output: boolean[]
  constructor() {
    this.reg_0 = new register_1_bit()
    this.reg_1 = new register_1_bit()
    this.reg_2 = new register_1_bit()
    this.reg_3 = new register_1_bit()
    this.reg_4 = new register_1_bit()
    this.reg_5 = new register_1_bit()
    this.reg_6 = new register_1_bit()
    this.reg_7 = new register_1_bit()
    this.reg_8 = new register_1_bit()
    this.reg_9 = new register_1_bit()
    this.reg_10 = new register_1_bit()
    this.reg_11 = new register_1_bit()
    this.reg_12 = new register_1_bit()
    this.reg_13 = new register_1_bit()
    this.reg_14 = new register_1_bit()
    this.reg_15 = new register_1_bit()
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
    this.load = false
    this.clock = false
    this.output = [
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
  }

  setInput(input_dec: number): void {
    this.input = this.decToBin(input_dec)
    this.reg_0.setInput(this.input[0])
    this.reg_1.setInput(this.input[1])
    this.reg_2.setInput(this.input[2])
    this.reg_3.setInput(this.input[3])
    this.reg_4.setInput(this.input[4])
    this.reg_5.setInput(this.input[5])
    this.reg_6.setInput(this.input[6])
    this.reg_7.setInput(this.input[7])
    this.reg_8.setInput(this.input[8])
    this.reg_9.setInput(this.input[9])
    this.reg_10.setInput(this.input[10])
    this.reg_11.setInput(this.input[11])
    this.reg_12.setInput(this.input[12])
    this.reg_13.setInput(this.input[13])
    this.reg_14.setInput(this.input[14])
    this.reg_15.setInput(this.input[15])
  }

  setLoad(load: boolean): void {
    this.load = load
    this.reg_0.setLoad(this.load)
    this.reg_1.setLoad(this.load)
    this.reg_2.setLoad(this.load)
    this.reg_3.setLoad(this.load)
    this.reg_4.setLoad(this.load)
    this.reg_5.setLoad(this.load)
    this.reg_6.setLoad(this.load)
    this.reg_7.setLoad(this.load)
    this.reg_8.setLoad(this.load)
    this.reg_9.setLoad(this.load)
    this.reg_10.setLoad(this.load)
    this.reg_11.setLoad(this.load)
    this.reg_12.setLoad(this.load)
    this.reg_13.setLoad(this.load)
    this.reg_14.setLoad(this.load)
    this.reg_15.setLoad(this.load)
  }

  setClock(clock: boolean): void {
    this.clock = clock
    this.reg_0.setClock(this.clock)
    this.reg_1.setClock(this.clock)
    this.reg_2.setClock(this.clock)
    this.reg_3.setClock(this.clock)
    this.reg_4.setClock(this.clock)
    this.reg_5.setClock(this.clock)
    this.reg_6.setClock(this.clock)
    this.reg_7.setClock(this.clock)
    this.reg_8.setClock(this.clock)
    this.reg_9.setClock(this.clock)
    this.reg_10.setClock(this.clock)
    this.reg_11.setClock(this.clock)
    this.reg_12.setClock(this.clock)
    this.reg_13.setClock(this.clock)
    this.reg_14.setClock(this.clock)
    this.reg_15.setClock(this.clock)
  }

  getOutput(): boolean[] {
    this.output[0] = this.reg_0.getOutput()
    this.output[1] = this.reg_1.getOutput()
    this.output[2] = this.reg_2.getOutput()
    this.output[3] = this.reg_3.getOutput()
    this.output[4] = this.reg_4.getOutput()
    this.output[5] = this.reg_5.getOutput()
    this.output[6] = this.reg_6.getOutput()
    this.output[7] = this.reg_7.getOutput()
    this.output[8] = this.reg_8.getOutput()
    this.output[9] = this.reg_9.getOutput()
    this.output[10] = this.reg_10.getOutput()
    this.output[11] = this.reg_11.getOutput()
    this.output[12] = this.reg_12.getOutput()
    this.output[13] = this.reg_13.getOutput()
    this.output[14] = this.reg_14.getOutput()
    this.output[15] = this.reg_15.getOutput()

    return this.output
  }

  getDecOutput(): number {
    this.output[0] = this.reg_0.getOutput()
    this.output[1] = this.reg_1.getOutput()
    this.output[2] = this.reg_2.getOutput()
    this.output[3] = this.reg_3.getOutput()
    this.output[4] = this.reg_4.getOutput()
    this.output[5] = this.reg_5.getOutput()
    this.output[6] = this.reg_6.getOutput()
    this.output[7] = this.reg_7.getOutput()
    this.output[8] = this.reg_8.getOutput()
    this.output[9] = this.reg_9.getOutput()
    this.output[10] = this.reg_10.getOutput()
    this.output[11] = this.reg_11.getOutput()
    this.output[12] = this.reg_12.getOutput()
    this.output[13] = this.reg_13.getOutput()
    this.output[14] = this.reg_14.getOutput()
    this.output[15] = this.reg_15.getOutput()

    return this.binToDec(this.output)
  }

  private decToBin(dec_num: number): boolean[] {
    let bin_arr: boolean[]
    bin_arr = []

    // check if negative
    if (dec_num < 0) {
      dec_num = dec_num * -1
      bin_arr.unshift(true)
    } else {
      bin_arr.unshift(false)
    }

    // convert to binary
    while (dec_num > 0) {
      if (dec_num % 2 == 1) {
        bin_arr.splice(1, 0, true)
      } else {
        bin_arr.splice(1, 0, false)
      }
      dec_num = Math.floor(dec_num / 2) // int division
    }

    // pad false before the number and after the sign to make it length 16
    while (bin_arr.length < NUM_BITS) {
      bin_arr.splice(1, 0, false)
    }

    return bin_arr
  }

  private binToDec(bin_arr: boolean[]): number {
    let index: number
    index = NUM_BITS - 1 // lsb
    let dec_num: number
    dec_num = 0
    let pos_val: number
    pos_val = 1

    while (index > 0) {
      if (bin_arr[index]) {
        dec_num = dec_num + pos_val
      }
      index = index - 1
      pos_val = pos_val * 2
    }

    if (bin_arr[0]) {
      dec_num = -1 * dec_num
    }

    return dec_num
  }
}
