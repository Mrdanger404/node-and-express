const fs = require('fs');


fs.writeFile('test1.txt', ' this is test one', (err) => {
    if(err){
        console.log("file create failed")
    } else{
        console.log('file create successful')
    }
})