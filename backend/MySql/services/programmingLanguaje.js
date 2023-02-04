/* Este es el modelo */

const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffSet(page, config.listPerPage);
    const rows = await db.query(
        `SELECT *
         FROM lenguajes_programacion LIMIT ${offset}, ${config.listPerPage}`
    );
    const data = helper.emptyRows(rows);
    const metadata = {page};

    return {
        data, metadata
    }
}

async function create(programmingLanguaje) {

    const resultado = await db.query(
        `INSERT INTO lenguajes_programacion (nombre, anio_salida, github_rank)
         VALUES ("${programmingLanguaje.nombre}", "${programmingLanguaje.anio_salida}",
                 "${programmingLanguaje.github_rank}")`
    );
    let message = "Error al insertar un lenguaje de programacion";
    if (resultado.affectedRows) {
        message = "El lenguaje se a creado con exito";
    }
    return {message};
}

async function update(id, programmingLanguaje) {
    const resultado = await db.query(
        `UPDATE lenguajes_programacion
         SET nombre="${programmingLanguaje.nombre}",
             anio_salida="${programmingLanguaje.anio_salida}",
             github_rank="${programmingLanguaje.github_rank}" WHERE id="${id}"`
    );
    console.log(resultado);
    let message = "Error al actualizar valores del lenguaje";
    if (resultado.affectedRows) {
        message = "El lenguaje se a actualizado con exito";
    }
    return {message};
}

async function deleteRegistrer(id){
    const result = db.query(
        `DELETE FROM lenguajes_protgramacion WHERE id= "${id}"`
    );
    let message = "Error al actualizar valores del lenguaje";
    if (resultado.affectedRows) {
        message = "El lenguaje se a actualizado con exito";
    }
    return {message};
}

module.exports = {
    create,
    getMultiple,
    update,
    deleteRegistrer
}