import React, { useState } from 'react'
import './App.css'
import UserInput from './UserInput'
import { CashNote } from './CashNote'
import { DisplayError } from './DisplayError'
import { ApiError } from './ApiError'

const apiPort = 3001

const App: React.FunctionComponent = () => {
  const [notesObject, setNotes] = useState({})
  const [error, setError] = useState(null)

  async function withdrawCash(cashAmount: number) {
    console.log('withdrawCash', cashAmount)
    const url = `http://localhost:${apiPort}/withdraw/${cashAmount}`
    try {
      const result = await fetch(url).then(res => res.json())

      console.log('withdrawCash result', result)
      if (result.data) {
        setNotes(result.data)
        setError(null)
      } else {
        console.error('withdrawCash error', error)
        setNotes([])
        setError(result.error)
      }
    } catch (error) {
      console.error('withdrawCash error', error)
      setError(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">Cash machine</header>
      <UserInput withdrawCash={withdrawCash} />
      {error && <DisplayError error={error} />}
      <div>
        {Object.entries(notesObject)
          .filter(([_, amount]) => Number(amount) > 0)
          // .sort((([n1, _], [n2, _])) => (n1 < n2))
          .map(([note, amount]) => (
            <CashNote note={Number(note)} amount={Number(amount)} />
          ))}
      </div>
    </div>
  )
}

export default App
