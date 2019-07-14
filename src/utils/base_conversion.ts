export const decToBin = (dec_num: number, num_bits: number): boolean[] => {
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
  while (bin_arr.length < num_bits) {
    bin_arr.splice(1, 0, false)
  }

  return bin_arr
}

export const binToDec = (bin_arr: boolean[], num_bits: number): number => {
  let index: number
  index = num_bits - 1 // lsb
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
