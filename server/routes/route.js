const express = require('express')
const router = express.Router()
const {getData,getSlug,createData } = require("../controller/controllerRoute")

router.get('/blogs',getData )

router.get('/blog/:slug' , getSlug)

router.post('/create', createData)


module.exports =  router ; 