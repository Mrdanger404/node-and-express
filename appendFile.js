const fs = require('fs');

fs.appendFile('test1.txt', 'this is text 2 of test1 file', (err) => {
    if(err){
        console.log("failed")
    } else{
        console.log("success")
    }
})