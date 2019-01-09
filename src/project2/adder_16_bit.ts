import { full_adder } from './full_adder'

// ripple carry adder
export function adder_16_bit(a: boolean[], b: boolean[]) {
  const res15 = full_adder(a[15], b[15], false)
  const sum15 = res15[0]
  const carry_15 = res15[1]
  const res14 = full_adder(a[14], b[14], carry_15)
  const sum14 = res14[0]
  const carry_14 = res14[1]
  const res13 = full_adder(a[13], b[13], carry_14)
  const sum13 = res13[0]
  const carry_13 = res13[1]
  const res12 = full_adder(a[12], b[12], carry_13)
  const sum12 = res12[0]
  const carry_12 = res12[1]
  const res11 = full_adder(a[11], b[11], carry_12)
  const sum11 = res11[0]
  const carry_11 = res11[1]
  const res10 = full_adder(a[10], b[10], carry_11)
  const sum10 = res10[0]
  const carry_10 = res10[1]
  const res9 = full_adder(a[9], b[9], carry_10)
  const sum9 = res9[0]
  const carry_9 = res9[1]
  const res8 = full_adder(a[8], b[8], carry_9)
  const sum8 = res8[0]
  const carry_8 = res8[1]
  const res7 = full_adder(a[7], b[7], carry_8)
  const sum7 = res7[0]
  const carry_7 = res7[1]
  const res6 = full_adder(a[6], b[6], carry_7)
  const sum6 = res6[0]
  const carry_6 = res6[1]
  const res5 = full_adder(a[5], b[5], carry_6)
  const sum5 = res5[0]
  const carry_5 = res5[1]
  const res4 = full_adder(a[4], b[4], carry_5)
  const sum4 = res4[0]
  const carry_4 = res4[1]
  const res3 = full_adder(a[3], b[3], carry_4)
  const sum3 = res3[0]
  const carry_3 = res3[1]
  const res2 = full_adder(a[2], b[2], carry_3)
  const sum2 = res2[0]
  const carry_2 = res2[1]
  const res1 = full_adder(a[1], b[1], carry_2)
  const sum1 = res1[0]
  const carry_1 = res1[1]
  const res0 = full_adder(a[0], b[0], carry_1)
  const sum0 = res0[0]

  return [
    sum0,
    sum1,
    sum2,
    sum3,
    sum4,
    sum5,
    sum6,
    sum7,
    sum8,
    sum9,
    sum10,
    sum11,
    sum12,
    sum13,
    sum14,
    sum15
  ]
}