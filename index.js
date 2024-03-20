var basePath = __dirname;
var http = require("http");
var fs = require("fs");
var path = require("path");

http
  .createServer(function (req, res) {
    const url = req.url === "/" ? "index.html" : req.url;
    var stream = fs.createReadStream(path.join(basePath, url));
    stream.on("error", function () {
      res.writeHead(404);
      res.end();
    });
    stream.pipe(res);
  })
  .listen(3000);
