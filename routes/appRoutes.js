const express = require('express')
const {homeResponse, createuser, getuser, deleteuser} = require('../controllers/userControler.js')
const appRoutes = express.Router()


appRoutes.get('/',homeResponse)
appRoutes.post('/createuser',createuser)
appRoutes.get('/getuser',getuser)
appRoutes.delete('/deleteuser/:id',deleteuser)

module.exports = appRoutes