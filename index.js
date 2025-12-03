const express = require('express');
const app = express();
require("dotenv").config();
const PORT  = process.env.PORT || 3000;
const connectDB = require('./config/connectionDB')
app.get('/',(req,res)=>{
    res.send(`localhost:${PORT},helo ouadie`)
})






app.listen(PORT,()=>{
    connectDB()
    console.log(`http://localhost:${PORT}`)
})