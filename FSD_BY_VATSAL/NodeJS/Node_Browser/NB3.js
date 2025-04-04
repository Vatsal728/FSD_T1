var http = require("http");
var url = require("url");
var server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var add = parseInt(q.a) + parseInt(q.b);

    res.end(add.toString());
  })
  .listen(3000);
