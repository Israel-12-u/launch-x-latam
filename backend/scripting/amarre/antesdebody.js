let encabezados = "";

window.onclick = function () {
    /* me crea una seria de element por cada tag encontrado */
    let encabezados = document.createElement("h1");
    console.log(encabezados);
    const text = document.createTextNode('Quieres ser mi morr@?');
    console.log(text);
    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}
/* diana.cruz@ids.com.mx */

/* TIPOS DE DATOS EN JS */
let variables = 42 // tipo numerio entero o int
console.log(typeof variables);
variables = '42'; // cadenas de caracteres
console.log(typeof variables);
variables = 42
console.log(variables+variables);
variables = true; // variable de tipo booleano true or false 1 ó 0
console.log(typeof variables);

