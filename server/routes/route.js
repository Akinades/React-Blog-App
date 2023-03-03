const express = require('express')
const router = express.Router()
const {getData,getSlug,createData,deleteData } = require("../controller/controllerRoute")

router.get('/blogs',getData )

router.get('/blog/:slug' , getSlug)

router.post('/create', createData)

router.delete('/blog/:slug', deleteData)


module.exports =  router ; 