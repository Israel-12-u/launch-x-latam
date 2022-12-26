console.log("Hola Mundo");
/* const ocupa menos proceso de memoria, al igual que menos memoria ram */
const http = require('http');

const host = "0.0.0.0";
const port = 3000
const server = http.createServer(
    /* toda peticion de http necesita en response "RESPUESTA" y un request "peticion" */
    (req, res) => {
        /* code 200 = todo esta bien */
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("Hola Mundo 7u7")
    }
);

server.listen(port, host, () => {
    console.log("Server ON en: " + host + "/" + port);
});