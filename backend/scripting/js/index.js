const parrafoInicial = document.getElementById("parrafoInicial");
console.log(parrafoInicial);

parrafoInicial.onclick = function () {
    cambiaColorAleatorio()
}

function cambiaColorAleatorio() {
    const colores = [
        'red', 'blue', 'green', 'yellow', 'orange'
    ];
    console.log(colores[Math.floor(Math.random() * colores.length)]);
    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}

/* TIPOS DE VARIABLES
    var => modificable, variables globales => NO SE RECOMENDIAN
    let => modificable, scope limitado => RECOMENDADA USAR
    const => constante, no modificable, scope global => Scope Global  
*/

/* Cases
PascalCase => Clases -JAVA, Python

camelCase => variables, funciones, atributos. - Java - JavaScript
    variable => parrafoIncial = 
    funcion => parrafoIncial()
    atributo => parrafoIncial
snacke_case = Python, Js
    variables y funciones 
CASE => Constantes 
*/

