import React from 'react'

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
  return (
    <div>
      ${note} x {amount}
      {noteRepeater.map((_, idx) => (
        <img
          key={idx}
          src={notesImages.get(note)}
          alt={`$${note}`}
          style={{
            maxWidth: '200px',
            zIndex: idx,
            left: -idx * 10 + '%',
            position: 'relative',
          }}
        />
      ))}
    </div>
  )
}
