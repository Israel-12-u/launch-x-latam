const express = require('express');
const app = express();
const port = 9000;
const programmingLanguajeRouter = require('./routes/progammingLanguaje');

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    res.json({message: "OK"});
});


app.use("/lenguajes", programmingLanguajeRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
});

app.listen(port, () => {
    console.log(`escuchando en http://localhost:${port}`);
});

