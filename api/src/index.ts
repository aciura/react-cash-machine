import * as express from 'express'

import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import setupRoutes from './routes'

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

setupRoutes(app)

if (require.main === module) {
  // True if file is executed. (Required for unit testing)
  app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT)
  })
}
export default app
