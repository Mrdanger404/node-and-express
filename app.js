const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send('i am home route');
    res.end()
})

module.exports = app;