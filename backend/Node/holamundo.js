/* cargar un modulo de node.js*/
const http = require("http");

const rd = require("./modules/retrivedate"); /*Cargamos un modulo propio que esta en
    modules/retrivedate.js*/

const url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    /*res.write("La fecha y hora es: " + rd.RetrieveDate());*/
   /* res.write(req.url);*/
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;

    /* res.end("Hola Mundo");*/
    res.end(text);
}).listen(8080);