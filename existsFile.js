const fs = require('fs');

fs.exists('test1.txt', (result) => {
    if(result){
        console.log("found")
    } else{
        console.log('not found')
    }
})