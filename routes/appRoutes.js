const express = require('express')
const {homeResponse, createuser, getuser, deleteuser, updateuser} = require('../controllers/userControler.js')
const appRoutes = express.Router()


appRoutes.get('/',homeResponse)
appRoutes.post('/createuser',createuser)
appRoutes.get('/getuser',getuser)
appRoutes.delete('/deleteuser/:id',deleteuser)
appRoutes.put('/updateuser/:id',updateuser)

module.exports = appRoutes