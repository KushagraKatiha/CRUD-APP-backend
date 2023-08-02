require('dotenv').config()
const express = require('express')
const dbConnection = require('./connection/db.js')
const appRoutes = require('./routes/appRoutes.js')

const app = express()

app.use(express.json())

dbConnection()

app.use('/', appRoutes)


module.exports = app 