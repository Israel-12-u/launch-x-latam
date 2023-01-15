let productModel = [
    {
        'id':1,
        'name': 'Lapiz del numero 2',
        'outdated': false
    }
];

const productosActualizar = await productModel.find({ outdated: false });

for (const key in productosActualizar) {
    const producto = productosActualizar[key];
    producto.outdated = false;
    await producto.save();
}

/* Alternativa mejor 
    1- escribir una sola consulta
*/

await
