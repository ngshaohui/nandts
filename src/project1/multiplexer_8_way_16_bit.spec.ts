import { Multiplexer8Way16Bit } from './multiplexer_8_way_16_bit'
import { expect } from 'chai'
import 'mocha'

// TODO fix the damn test cases

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, false, true, false, false, true, false, false, false, true, true, false, true, false, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, false, true, true, false, true, false, false, false, true, false, true, false, true, true, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, true, false, false, false, true, false, true, false, true, true, false, false, true, true, true]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, true, false, true, false, true, true, false, false, true, true, true, true, false, false, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false, true]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [false, true, true, true, true, false, false, false, true, false, false, true, true, false, true, false]
    )
  })

})

describe('Multiplexer8Way16Bit test for: sel false false', () => {

  it('should return all false', () => {
    const circuit = new Multiplexer8Way16Bit()
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
    
    expect(circuit.getOutput()).to.deep.equal(
      [true, false, false, false, true, false, false, true, true, false, true, false, true, false, true, true]
    )
  })

})