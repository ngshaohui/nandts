import { d_flip_flop } from './d_flip_flop'
import { expect } from 'chai'
import 'mocha'

const circuit = new d_flip_flop()

// initial: data false, clock false
describe('1 d_flip_flop test for: set clock true', () => {

  it('should return: q false, q_bar true', () => {
    circuit.setClock(true)
    expect(circuit.q).to.equal(false)
    expect(circuit.q_bar).to.equal(true)
    expect(circuit.output).to.equal(false)
  })

})

// initial: data false, clock true
describe('2 d_flip_flop test for: set data true', () => {

  it('should return: q true, q_bar false', () => {
    circuit.setData(true)
    expect(circuit.q).to.equal(true)
    expect(circuit.q_bar).to.equal(false)
    expect(circuit.output).to.equal(false)
  })

})

// initial: data true, clock true
describe('3 d_flip_flop test for: set data false', () => {

  it('should return: q false, q_bar true', () => {
    circuit.setData(false)
    expect(circuit.q).to.equal(false)
    expect(circuit.q_bar).to.equal(true)
    expect(circuit.output).to.equal(false)
  })

})

// initial: data false, clock true
describe('4 d_flip_flop test for: set clock false', () => {

  it('should return: q false, q_bar true', () => {
    circuit.setClock(false)
    expect(circuit.q).to.equal(false)
    expect(circuit.q_bar).to.equal(true)
    expect(circuit.output).to.equal(false)
  })

})

// initial: data false, clock false
describe('5 d_flip_flop test for: set data true', () => {

  it('should return: q false, q_bar true', () => {
    circuit.setData(true)
    expect(circuit.q).to.equal(false)
    expect(circuit.q_bar).to.equal(true)
    expect(circuit.output).to.equal(false)
  })

})

// initial: data true, clock false
describe('6 d_flip_flop test for: set clock true', () => {

  it('should return: q true, q_bar false', () => {
    circuit.setClock(true)
    expect(circuit.q).to.equal(true)
    expect(circuit.q_bar).to.equal(false)
    expect(circuit.output).to.equal(false)
  })

})

// initial: data true, clock true
describe('7 d_flip_flop test for: set data false', () => {

  it('should return: q true, q_bar false', () => {
    circuit.setData(false)
    expect(circuit.q).to.equal(false)
    expect(circuit.q_bar).to.equal(true)
    expect(circuit.output).to.equal(false)
  })

})

// initial: data false, clock true
describe('8 d_flip_flop test for: set data false', () => {

  it('should return: q false, q_bar true', () => {
    circuit.setClock(false)
    expect(circuit.q).to.equal(false)
    expect(circuit.q_bar).to.equal(true)
    expect(circuit.output).to.equal(false)
  })

})