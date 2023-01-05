const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/templates/index.html');
});

io.on("connection", (socket) => {
    console.log("Usuario conectado a chat");
    socket.on("chat message", (chat) => {
        io.emit("chat message", chat);
    })
    socket.on("disconnect", () => {
        console.log("El usuario se ha desconectado");
    });
});

server.listen(9000, () => {
    console.log("Abrir desde puerto 9000");
});