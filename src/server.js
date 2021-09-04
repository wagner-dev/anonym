const express = require('express')
const server = express()
const rotas = require('./rotas/')
const cors = require('cors')
const mongoose = require('mongoose')

// data
mongoose.connect('mongodb://localhost:27017/anonym')

// config
server.use(express.json())
server.use(cors({
    origin: 'http://localhost:3000'
}))

// rotas
server.use('/api', rotas)


// on
const PORT = 2999
server.listen(PORT, () => console.log('Server started...'))