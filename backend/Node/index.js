const http = require("http");
const fs = require("fs"); /*Pemite lear un archivo*/
http.createServer((req, res) => {
    fs.readFile("./html/demo.html", function (err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return (res.end());
    });
}).listen(8080);