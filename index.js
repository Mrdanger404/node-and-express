const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))




const connectionDB = async() =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/userInfo');
        console.log('connect')
    } catch (error) {
        console.log(error)
    }
}


const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    createAt : {
        type : Date,
        default : Date.now
    }
})


const data = mongoose.model('userInfo', userSchema);

app.use(express.json());
app.use(express.static('index.html'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/userInfo', async(req,res)=>{

    try {
        const newData = await data.create({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone
        });
        res.json(newData)
    } catch (error) {
        console.log(error)
    }
})



app.listen(port, async()=>{
    console.log(`server is running at http://localhost:${port}`);
    await connectionDB();
})

