const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post("/", (req,res)=>{
    const formData = req.body
    console.log(formData)
    res.send(formData)
})

module.exports = app;