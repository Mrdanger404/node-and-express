const fs = require('fs');

fs.rename('test1.txt', 'test2.txt', (err)=> {
    if(err){
        console.log(err)
    } else{
        console.log("success")
    }
})