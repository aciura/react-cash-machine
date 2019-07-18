import React, {
  useState,
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
} from 'react'

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
    <div>
      <label htmlFor="cashAmount">Cash to withdraw</label>

      <input
        ref={inputRef}
        type="number"
        id="cashAmount"
        name="cashAmount"
        style={{ margin: '5px' }}
        value={cashAmount}
        onChange={handleCashAmountChange}
        onKeyUp={e => {
          if (e.keyCode === ENTER_KEY_CODE) withdrawCash(cashAmount)
        }}
      />

      <button
        style={{ display: 'inline-block' }}
        onClick={_ => withdrawCash(cashAmount)}
      >
        Withdraw
      </button>
    </div>
  )
}

export default UserInput
