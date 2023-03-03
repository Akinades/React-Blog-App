const express = require('express')
const router = express.Router()
const {getData,createData} = require("../controller/controllerRoute")

router.get('/blogs',getData )

router.post('/create', createData)

module.exports =  router ; 