import * as express from 'express'
import { Request, Response } from 'express'
// const cors = require('cors')
// const bodyParser = require('body-parser')

const app = express()
const { PORT = 3000 } = process.env
// app.use(cors(), bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  })
})

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT)
})
