import * as express from 'express'
import { Request, Response } from 'express'
import { calculateNotes } from './cashService'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'

const app = express()
const { PORT = 3001 } = process.env
const corsOptions: cors.CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}
app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello from cash-machine api',
    date: new Date(),
  })
})

app.get('/withdraw/:cashAmount', (req, resp) => {
  console.log('Request /withdraw/:cashAmount', req.params.cashAmount)
  try {
    const cashAmount = req.params.cashAmount
    const notes = calculateNotes(cashAmount)
    resp.send({ data: notes })
  } catch (error) {
    console.error(error)
    resp.status(400).send({ error: error })
  }
})

if (require.main === module) {
  // True if file is executed. (Required for unit testing)
  app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT)
  })
}
export default app
