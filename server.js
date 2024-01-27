const http = require('http');
const port = 3000;
const hostname = "127.0.0.1"

const server = http.createServer((req, res) => {
    res.end("Hello, i am your first server")
});

// server.listen(3000, ()=> {
//     console.log('server is running at localhost:3000')
// })


server.listen(port, hostname, ()=> {
    console.log(`server is running at http://${hostname}:${port}`)
})