import { InvalidArgumentException, NoteUnavailableException } from './errors'

const availableNotes = [100, 50, 20, 10]

export function calculateNotes(cashAmount: number) {
  if (!cashAmount) {
    return []
  }
  throwIfInvalidArgument(cashAmount)

  const notesArray = {}

  const [notes, rest] = availableNotes.reduce(
    ([notesResult, cashLeft], note) => {
      const notesUsed: number = Math.floor(cashLeft / note)
      const newCashLeft = cashLeft - notesUsed * note
      return [{ ...notesResult, [note]: notesUsed }, newCashLeft]
    },
    [notesArray, cashAmount]
  )

  throwIfRestMoreThenZero(rest, cashAmount)
  return notes
}

function throwIfRestMoreThenZero(restAmount: number, cashAmount: number) {
  if (restAmount > 0) {
    throw new NoteUnavailableException(
      `Cannot withdraw ${cashAmount}, rest ${restAmount}`
    )
  }
}

function throwIfInvalidArgument(cashAmount) {
  if (cashAmount < 0) {
    throw new InvalidArgumentException(`Invalid cashAmount ${cashAmount}`)
  }
}
