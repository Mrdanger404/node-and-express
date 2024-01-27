const fs = require('fs');

fs.unlink('test2.txt', (err)=> {
    if(err){
        console.log(err)
    } else{
        console.log('success')
    }
})