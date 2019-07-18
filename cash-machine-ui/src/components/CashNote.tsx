import React, { useEffect, useRef } from 'react'
import './CashNote.css'

const notesImages = new Map([
  [10, './images/10usd.jpg'],
  [20, './images/20usd.jpg'],
  [50, './images/50usd.jpg'],
  [100, './images/100usd.jpg'],
])

type CashNoteProps = {
  note: number
  amount: number
}

export const CashNote: React.FC<CashNoteProps> = ({ note, amount }) => {
  const noteRepeater = [...Array(amount)]
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const cashNotes = document.getElementsByClassName('cash-note')
    Array.from(cashNotes).map((el, idx) =>
      setTimeout(() => el.classList.add('final'), 100 * idx)
    )
  }, [])

  return (
    <div>
      ${note} x {amount}
      {noteRepeater.map((_, idx) => (
        <img
          ref={imgRef}
          key={idx}
          src={notesImages.get(note)}
          alt={`$${note}`}
          className="cash-note"
        />
      ))}
    </div>
  )
}
