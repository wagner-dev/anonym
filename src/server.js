require('dotenv').config()

const express = require('express')
const server = express()
const routes = require('./routes')
const cors = require('cors')
const helmet = require("helmet")
const mongoose = require('mongoose')

// database
const DATABASE_HOST = process.env.ANONYM_DATABASE_HOST
mongoose.connect(DATABASE_HOST)

// config
server.use(express.json())
server.use(cors({
    origin: process.env.ANONYM_CLIENT_HOST
}))

server.use(helmet())

// rotas
server.use('/api', routes)


// on
const PORT = 2999 || process.env.PORT
server.listen(PORT, () => console.log('Server started...'))