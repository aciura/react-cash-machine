import React, {
  useState,
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
} from 'react'
import './UserInput.css'

const ENTER_KEY_CODE = 13

type UserInputProps = {
  withdrawCash: (amount: number) => Promise<void>
}

const UserInput: FunctionComponent<UserInputProps> = ({ withdrawCash }) => {
  const [cashAmount, setCashAmount] = useState(0)
  const handleCashAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCashAmount(Number(e.target.value))
  }
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputRef !== null && inputRef.current !== null) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <React.Fragment>
      <label htmlFor="cashAmount">Cash to withdraw</label>
      <input
        ref={inputRef}
        type="number"
        id="cashAmount"
        name="cashAmount"
        value={cashAmount}
        onChange={handleCashAmountChange}
        onKeyUp={e => {
          if (e.keyCode === ENTER_KEY_CODE) withdrawCash(cashAmount)
        }}
      />
      <button id="withdraw" onClick={_ => withdrawCash(cashAmount)}>
        Withdraw
      </button>
    </React.Fragment>
  )
}

export default UserInput
