import { multiplexer_8_way_16_bit } from './multiplexer_8_way_16_bit'
import { expect } from 'chai'
import 'mocha'

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      false, false, false,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      false, false, true,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      false, true, false,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      false, true, true,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      true, false, false,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      true, false, true,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      true, true, false,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      true, true, true,
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      false, false, false,
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false],
      [false, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true],
      [false, false, true, true, false, true, false, false, false, true, false, true, false, true, true, false],
      [false, true, false, false, false, true, false, true, false, true, true, false, false, true, true, true],
      [false, true, false, true, false, true, true, false, false, true, true, true, true, false, false, false],
      [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false, true],
      [false, true, true, true, true, false, false, false, true, false, false, true, true, false, true, false],
      [true, false, false, false, true, false, false, true, true, false, true, false, true, false, true, true]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      false, false, true,
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false],
      [false, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true],
      [false, false, true, true, false, true, false, false, false, true, false, true, false, true, true, false],
      [false, true, false, false, false, true, false, true, false, true, true, false, false, true, true, true],
      [false, true, false, true, false, true, true, false, false, true, true, true, true, false, false, false],
      [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false, true],
      [false, true, true, true, true, false, false, false, true, false, false, true, true, false, true, false],
      [true, false, false, false, true, false, false, true, true, false, true, false, true, false, true, true]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      false, true, false,
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false],
      [false, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true],
      [false, false, true, true, false, true, false, false, false, true, false, true, false, true, true, false],
      [false, true, false, false, false, true, false, true, false, true, true, false, false, true, true, true],
      [false, true, false, true, false, true, true, false, false, true, true, true, true, false, false, false],
      [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false, true],
      [false, true, true, true, true, false, false, false, true, false, false, true, true, false, true, false],
      [true, false, false, false, true, false, false, true, true, false, true, false, true, false, true, true]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, false, true, true, false, true, false, false, false, true, false, true, false, true, true, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      false, true, true,
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false],
      [false, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true],
      [false, false, true, true, false, true, false, false, false, true, false, true, false, true, true, false],
      [false, true, false, false, false, true, false, true, false, true, true, false, false, true, true, true],
      [false, true, false, true, false, true, true, false, false, true, true, true, true, false, false, false],
      [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false, true],
      [false, true, true, true, true, false, false, false, true, false, false, true, true, false, true, false],
      [true, false, false, false, true, false, false, true, true, false, true, false, true, false, true, true]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, true, false, false, false, true, false, true, false, true, true, false, false, true, true, true]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      true, false, false,
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false],
      [false, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true],
      [false, false, true, true, false, true, false, false, false, true, false, true, false, true, true, false],
      [false, true, false, false, false, true, false, true, false, true, true, false, false, true, true, true],
      [false, true, false, true, false, true, true, false, false, true, true, true, true, false, false, false],
      [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false, true],
      [false, true, true, true, true, false, false, false, true, false, false, true, true, false, true, false],
      [true, false, false, false, true, false, false, true, true, false, true, false, true, false, true, true]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, true, false, true, false, true, true, false, false, true, true, true, true, false, false, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      true, false, true,
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false],
      [false, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true],
      [false, false, true, true, false, true, false, false, false, true, false, true, false, true, true, false],
      [false, true, false, false, false, true, false, true, false, true, true, false, false, true, true, true],
      [false, true, false, true, false, true, true, false, false, true, true, true, true, false, false, false],
      [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false, true],
      [false, true, true, true, true, false, false, false, true, false, false, true, true, false, true, false],
      [true, false, false, false, true, false, false, true, true, false, true, false, true, false, true, true]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false, true]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      true, true, false,
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false],
      [false, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true],
      [false, false, true, true, false, true, false, false, false, true, false, true, false, true, true, false],
      [false, true, false, false, false, true, false, true, false, true, true, false, false, true, true, true],
      [false, true, false, true, false, true, true, false, false, true, true, true, true, false, false, false],
      [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false, true],
      [false, true, true, true, true, false, false, false, true, false, false, true, true, false, true, false],
      [true, false, false, false, true, false, false, true, true, false, true, false, true, false, true, true]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [false, true, true, true, true, false, false, false, true, false, false, true, true, false, true, false]
    )
  })

})

describe('multiplexer_8_way_16_bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new multiplexer_8_way_16_bit()
    circuit.setCurcuit(
      true, true, true,
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false],
      [false, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true],
      [false, false, true, true, false, true, false, false, false, true, false, true, false, true, true, false],
      [false, true, false, false, false, true, false, true, false, true, true, false, false, true, true, true],
      [false, true, false, true, false, true, true, false, false, true, true, true, true, false, false, false],
      [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false, true],
      [false, true, true, true, true, false, false, false, true, false, false, true, true, false, true, false],
      [true, false, false, false, true, false, false, true, true, false, true, false, true, false, true, true]
    )
    circuit.runCircuit()
    expect(circuit.output).to.deep.equal(
      [true, false, false, false, true, false, false, true, true, false, true, false, true, false, true, true]
    )
  })

})