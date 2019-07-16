import * as express from 'express'
import { Request, Response } from 'express'
// const cors = require('cors')
// const bodyParser = require('body-parser')

const app = express()
const { PORT = 3000 } = process.env
// app.use(cors(), bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  // console.log('Request', req)
  res.send({
    message: 'hello from cash-machine',
  })
})

const availableNotes = [100, 50, 20, 10]

class NoteUnavailableException extends Error {
  constructor(message?: string) {
    super(message)

    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
    this.name = NoteUnavailableException.name // stack traces display correctly now
  }
}

app.get('/withdraw/:cashAmount', (req, resp) => {
  console.log('Request /withdraw/:cashAmount', req.params.cashAmount)

  const cashAmount = req.params.cashAmount

  const notesArray = {}

  const [notes, rest] = availableNotes.reduce(
    ([notesResult, cashLeft], note) => {
      const notesUsed: number = Math.floor(cashLeft / note)
      const newCashLeft = cashLeft - notesUsed * note
      return [{ ...notesResult, [note]: notesUsed }, newCashLeft]
    },
    [notesArray, cashAmount]
  )

  if (rest > 0) {
    // throw new NoteUnavailableException(
    //   `Cannot withdraw ${cashAmount}, rest ${rest}`
    // )
    resp.status(400).send({ error: 'NoteUnavailableException' })
  } else {
    resp.send(notes)
  }
})

if (require.main === module) {
  // true if file is executed
  app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT)
  })
}
export default app
