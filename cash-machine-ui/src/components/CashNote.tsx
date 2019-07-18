import React from 'react'

type CashNoteProps = {
  note: number
  amount: number
}

export const CashNote: React.FC<CashNoteProps> = ({ note, amount }) => {
  return (
    <div>
      ${note} x {amount}
    </div>
  )
}
