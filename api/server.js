const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(bodyParser.json())

server.use('/',[
  require('./routes/rainfall')
])

server.listen(7000, () => {
  console.log('Started at http://localhost:7000')
})