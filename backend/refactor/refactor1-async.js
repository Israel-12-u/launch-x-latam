/* mi promesa */

function mifuncion() {
    return ("Algo");
}

mifuncion()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log("Error")
    });

/* Forma más eficiente */
/* async await */

try {
    const data = await mifuncion();
    console.log(data)
} catch (err) {
    console.log("Error");
}