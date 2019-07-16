const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = 9000

const app = express()
app.use(cors(), bodyParser.json())
app.listen(port, () => console.log(`Server running on port ${port}`))
