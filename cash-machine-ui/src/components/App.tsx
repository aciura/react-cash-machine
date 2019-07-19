import React, { useState } from 'react'
import './App.css'
import UserInput from './UserInput'
import { CashNote } from './CashNote'
import { DisplayError } from './DisplayError'
import { ApiError } from '../../../common/ApiResults'
import ApiService from '../services/ApiService'
import { sortNotes } from './Utils'

type Notes = { note: number; amount: number }[]

const App: React.FunctionComponent = () => {
  const [notes, setNotes] = useState<Notes>([])
  const [error, setError] = useState<ApiError | null>(null)

  async function withdrawCash(cashAmount: number) {
    console.log('withdrawCash', cashAmount)
    setNotes([])
    try {
      const result = await ApiService.withdrawCash(cashAmount)
      console.log('withdrawCash result', result)

      if ('data' in result) {
        setNotes(parseNotes(result.data))
        setError(null)
      } else {
        console.error('withdrawCash error', result.error)
        setError(result.error)
      }
    } catch (e) {
      console.error('withdrawCash error', e)
      setError(e)
    }
  }

  function parseNotes(data: Object) {
    const notesResult: Notes = Object.entries(data)
      .filter(([_, amount]) => Number(amount) > 0)
      .map(([note, amount]) => ({
        note: Number(note),
        amount: Number(amount),
      }))
      .sort(sortNotes)
    console.log('notes:', notesResult)
    return notesResult
  }

  return (
    <div className="App">
      <header>Cash machine</header>
      <div className="container">
        <div className="userInput">
          <UserInput withdrawCash={withdrawCash} />
        </div>
        {error && (
          <div className="errorRow">
            <DisplayError name={error.name} message={error.message} />
          </div>
        )}
        <div className="notesRow">
          {notes.map(n => (
            <CashNote key={n.note} note={n.note} amount={n.amount} />
          ))}
        </div>
      </div>
      <footer>© Adrian Ciura 2019</footer>
    </div>
  )
}

export default App
