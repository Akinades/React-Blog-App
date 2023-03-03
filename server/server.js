require('dotenv').config();
const express = require('express'); 
const morgan = require('morgan')
const cors = require('cors');
const mongoose = require('mongoose');
const { Router } = require('express');
const blogRoute = require("./routes/route");
const app = express();

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
//Database 
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONG_URI)
.then(()=>app.listen(process.env.PORT , ()=>
console.log('Server & Database are connecting on port ' + process.env.PORT)))
.catch((err)=>console.log(err))


//Route
app.use('/api' , blogRoute )

