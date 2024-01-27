const http = require("http");
const fs = require("fs");
const port = 5000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("home.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact"){
    fs.readFile("contact.html", (err, data) => {
      res.writeHead(200, {"content-Type" : "text/html"});
      res.write(data);
      res.end()
    })
  }
});

myServer.listen(port, hostname, () => {
  console.log(`server is running http://${hostname}:${port}`);
}); 
