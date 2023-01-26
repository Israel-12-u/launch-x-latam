/* Use strict */
/*'use strict'*/
let variableNoDeclarada = 10; /* Esta variable no esta declarada para declararla usar
    var, let o const => Por lo tanto da error*/
console.log(variableNoDeclarada);

var leti = 20;
console.log(leti);

function funcionEstricta(){
    /*'use strict'*/
    var leti = 'funcion Estricta';
    console.log(leti);
}

function funcionNoEstricta(){
    var leti = 'funcion no estricta'
    console.log(leti);
}

funcionEstricta();
funcionNoEstricta();