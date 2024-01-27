const http = require('http');
const port = 5000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req,res) => {
    res.writeHead(202, {'Content-Type': 'text/html'});
    // res.writeHead(202, {'Content-Type': 'text/plain'});
    res.write('<h1>Hello world</h1>');
    res.end();
})

myServer.listen(port, hostName, () => {
    console.log(`server is running at http://${hostName}/${port}`)
})