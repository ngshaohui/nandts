import { half_adder } from './half_adder'

export function incrementer_16_bit(a: boolean[]) {
  const res15 = half_adder(a[15], true)
  const sum15 = res15[0]
  const carry_15 = res15[1]
  const res14 = half_adder(a[14], carry_15)
  const sum14 = res14[0]
  const carry_14 = res14[1]
  const res13 = half_adder(a[13], carry_14)
  const sum13 = res13[0]
  const carry_13 = res13[1]
  const res12 = half_adder(a[12], carry_13)
  const sum12 = res12[0]
  const carry_12 = res12[1]
  const res11 = half_adder(a[11], carry_12)
  const sum11 = res11[0]
  const carry_11 = res11[1]
  const res10 = half_adder(a[10], carry_11)
  const sum10 = res10[0]
  const carry_10 = res10[1]
  const res9 = half_adder(a[9], carry_10)
  const sum9 = res9[0]
  const carry_9 = res9[1]
  const res8 = half_adder(a[8], carry_9)
  const sum8 = res8[0]
  const carry_8 = res8[1]
  const res7 = half_adder(a[7], carry_8)
  const sum7 = res7[0]
  const carry_7 = res7[1]
  const res6 = half_adder(a[6], carry_7)
  const sum6 = res6[0]
  const carry_6 = res6[1]
  const res5 = half_adder(a[5], carry_6)
  const sum5 = res5[0]
  const carry_5 = res5[1]
  const res4 = half_adder(a[4], carry_5)
  const sum4 = res4[0]
  const carry_4 = res4[1]
  const res3 = half_adder(a[3], carry_4)
  const sum3 = res3[0]
  const carry_3 = res3[1]
  const res2 = half_adder(a[2], carry_3)
  const sum2 = res2[0]
  const carry_2 = res2[1]
  const res1 = half_adder(a[1], carry_2)
  const sum1 = res1[0]
  const carry_1 = res1[1]
  const res0 = half_adder(a[0], carry_1)
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