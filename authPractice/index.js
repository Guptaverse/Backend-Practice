const express = require('express')
require("dotenv").config();
require("./config/database").connect();

const app = express();
app.use(express.json());

app.use("/auth",require('./routes/route'));


app.listen(PORT,()=>{
    console.log("server is running on ",PORT)
})