var http = require("http");
var server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url)
    res.end("url fetched")
}).listen(5008)