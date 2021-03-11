require('dotenv').config()
const path = require('path')
const express = require('express')
const server = express();
server.use(express.json())

server.use(express.static(path.join(__dirname, 'client/build', 'index.html')))

if(process.env.NODE_ENV !== 'production'){
  const cors = require('cors')
  server.use(cors())
}
server.use('*', (res,req) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})
const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  console.log(`listing on ${PORT}`)
})