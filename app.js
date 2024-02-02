const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/user/:id/age/:age', (req,res)=>{
    const id = req.params.id;
    const age = req.params.age;
    res.send(`<h1>user name ${id} and age ${age} </h1>`)
})


module.exports = app;