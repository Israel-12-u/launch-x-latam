let productModel = [
    {
        'id': 1,
        'name': 'Lapiz del numero 2',
        'outdated': false
    }
];

const productosActualizar = await productModel.find({outdated: false});

for (const key in productosActualizar) {
    const producto = productosActualizar[key];
    producto.outdated = false;
    await producto.save();
}

/* Alternativa mejor 
    1- escribir una sola consulta
*/

await productModel.update({outdated: true}, {
    $set: {outdated: false}
})

/* Otra forma de Promice.all */
/**
 * devuelve la suma de la data
 * @param {int} data
 * @returns {int}
 * */
function funcionAsync(data) {
    return data + data;
}

const primerOperacion = funcionAsync("1");
const segundaOperacion = funcionAsync("2");
const terceraOperacion = funcionAsync("3");

await Promise.all([primerOperacion, segundaOperacion, terceraOperacion]);
