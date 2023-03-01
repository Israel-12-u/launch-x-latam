/* mi promesa */

function mifuncion() {
    return ("Algo");
}

/* Forma no refactorisada */
mifuncion()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    });

/* Forma más eficiente */
/* async await */

try {
    const data = await mifuncion();
    console.log(data)
} catch (err) {
    console.log("Error");
}