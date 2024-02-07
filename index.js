const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3002;


const connectionDB = async() =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log('database is connected')
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
 
app.get('/', (req,res)=>{
    res.send('welcome')
})

app.listen(port, async()=>{
    console.log(`server is running at http://localhost:${port}`);

    await connectionDB()
});