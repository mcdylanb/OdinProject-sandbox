let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    var filename = "." + q.pathname + ".html";
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Tpye": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
