let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Create */
app.post("/", function (req, res) {
    res.send(`Te llammas ${req.body.name}`)
});

/* Read */

app.get("/", function (req, res) {
    res.send("Hola Mundo");
});

/* edit/update*/
app.put("/", function (req, res) {
    res.send(`Has actualizado el registro numero: ${req.body.id}`);
});

/* delete */
app.delete("/usuarios", function (req, res) {
    res.send(`Has eliminado el registro: ${req.query.user}`)
})


let server = app.listen(8080, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`Aplicacion escuchando desde http://%s:%s`, host, port);
});