const express = require('express');
const app = express();
require("dotenv").config();
const PORT  = process.env.PORT || 3000;
const connectDB = require('./config/connectionDB');
app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index.ejs',{userName:"ali ouadie"})
})






app.listen(PORT,()=>{
    connectDB()
    console.log(`http://localhost:${PORT}`)
})