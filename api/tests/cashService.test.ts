import { calculateNotes } from '../src/cashService'
import {
  NoteUnavailableException,
  InvalidArgumentException,
} from '../src/errors'

describe('calculateNotes', () => {
  it('should return one $100', done => {
    expect(calculateNotes(100)).toEqual({
      10: 0,
      20: 0,
      50: 0,
      100: 1,
    })
    done()
  })

  it('should return 1x $100, 1x $50, 1x $20, 1x $10 for 180', done => {
    expect(calculateNotes(180)).toEqual({
      10: 1,
      20: 1,
      50: 1,
      100: 1,
    })
    done()
  })

  it('should return 10x $100 for 1000', done => {
    expect(calculateNotes(1000)).toEqual({
      10: 0,
      20: 0,
      50: 0,
      100: 10,
    })
    done()
  })

  it('should throw NoteUnavailableException for 181', done => {
    expect(() => calculateNotes(181)).toThrow(NoteUnavailableException)
    done()
  })

  it('should throw InvalidArgumentException for -181', done => {
    expect(() => calculateNotes(-181)).toThrowError(InvalidArgumentException)
    done()
  })

  it('should return correct result for 0', done => {
    expect(calculateNotes(0)).toEqual({})
    done()
  })

  it('should return empty object for null', done => {
    expect(calculateNotes(null)).toEqual({})
    done()
  })

  it('should return something for 999999980', done => {
    expect(calculateNotes(999999980)).toEqual({
      '10': 1,
      '100': 9999999,
      '20': 1,
      '50': 1,
    })
    done()
  })
})
