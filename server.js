var http = require("http");
const PORT = 3000;
var a = 2;
var b = 15;
var c = `a=${a} b=${b} <u>sum=${a + b}</u>`;
http
  .createServer(function (req, res) {
    res.writeHeader(200, { "Content-type": "text/html" });
    // res.end("Hello World.");
    res.end(c);
  })
  .listen(PORT);

console.log(`Listening on Port ${PORT}`);
