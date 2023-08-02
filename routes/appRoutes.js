const express = require('express')
const {homeResponse, createuser} = require('../controllers/userControler.js')
const appRoutes = express.Router()

appRoutes.get('/',homeResponse)
appRoutes.post('/createuser',createuser)

module.exports = appRoutes