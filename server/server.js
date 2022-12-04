const path = require('path')
const express = require('express')

const fruitRoutes = require('./routes/fruits')
const userRoutes = require('./routes/users')
const walkerRoute = require('./routes/walker')
const dogListRoute = require('./routes/dogList')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/walker', walkerRoute)
server.use('/api/v1/doglist', dogListRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = server
