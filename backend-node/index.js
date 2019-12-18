const http = require("http");

http.createServer((req, res) => {
  return res.end("Meu primeiro projetinho em JS :D")
}).listen(3000);