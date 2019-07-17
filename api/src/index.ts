import * as express from 'express'
import { Request, Response } from 'express'
import { calculateNotes } from './cashService'
// const cors = require('cors')
// const bodyParser = require('body-parser')

const app = express()
const { PORT = 3000 } = process.env
// app.use(cors(), bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello from cash-machine',
  })
})

app.get('/withdraw/:cashAmount', (req, resp) => {
  console.log('Request /withdraw/:cashAmount', req.params.cashAmount)
  try {
    const cashAmount = req.params.cashAmount
    const notes = calculateNotes(cashAmount)
    resp.send(notes)
  } catch (error) {
    console.error(error)
    resp.status(400).send({ error })
  }
})

if (require.main === module) {
  // True if file is executed. (Required for unit testing)
  app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT)
  })
}
export default app
