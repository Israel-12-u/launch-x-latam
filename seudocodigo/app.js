
/* console.log("---Obtener el valor maximo de un array al igual que su incide  ---");

const arreglo = [3, 32, 43, 2, 43, 32]
let i = 0;
let index = 0;
let max = arreglo[0];
while (i < arreglo.length) {
    if (arreglo[i] >= max) {
        max = arreglo[i];
        index = i;
    }
    i++;
}
console.log(index);
console.log(max); */

/* console.log("--- Concatener dos array y ordenarlos de mayor a menor ");
const array1 = [1, 2, 6, 8, 9];
const array2 = [3, 5, 6, 9];
function unirArreglo() {
    let neuevoArreglo = [];
    for (let i = 0; i < array1.length; i++) {
        neuevoArreglo[i] = array1[i];
    }
    for (let i = 0; i < array2.length; i++) {
        neuevoArreglo[array1.length + i] = array2[i];
    }
    return (neuevoArreglo);
}
let array3 = unirArreglo(array1, array2);
console.log(array3);
function arregloOrdenado() {
    let i = 0;
    while (i < array3.length) {
        let j = i + 1;
        while (j < array3.length) {
            if (array3[i] > array3[j]) {
                let temp = array3[i];
                array3[i] = array3[j];
                array3[j] = temp;
            }
            j++;
        }
        i++;
    }
    return array3;
}
console.log(arregloOrdenado(array3));
 */


/* console.log("---Numero repetidos en un array---");

const array1 = [1, 3, 3, 4, 5, 6, 8, 9, 9]
const array2 = [2, 2, 3, 5, 7, 9, 9]
function numerosRepetidos() {
    let array3 = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                array3.push(array1[i]);
                break;
            }
        }
    }
    return (array3);
}
console.log(numerosRepetidos(array1,array2)); */

/* const a = 5;
const b = 3;
const c = 8;
function validarMedias() {
    if (a + b > c && a + c > b && b + c > a) {
        console.log("Se puede construir el triangulo");
    } else {
        console.log("no se puede construir el triangulo");
    }
}
const medidasLados = validarMedias(a,b,c);
console.log(medidasLados);
 */

/* const array1 = [1, 5, 9, 2, 15, 9, 10, 12];
function valoresMaximos() {
    let i = 0;
    let numero1 = 0;
    let numero2 = 0;
    while(i < array1.length) {
        if(array1[i] > numero1) {
            numero2 = numero1;
            numero1 = array1[i];
        } else if(array1[i] > numero2 && array1[i] !== numero1){
            numero2 = array1[i]
        }
        i++;
    }
    return [numero1,numero2];
}
const resultado = valoresMaximos(array1);
console.log(resultado); */

/* let array1 = [3,4,1]
function arregloOrdenado() {
    let i = 0;
    while (i < array1.length) {
        let j = i + 1;
        while (j < array1.length) {
            if (array1[i] > array1[j]) {
                let temp = array1[i];
                array1[i] = array1[j];
                array1[j] = temp;
            }
            j++;
        }
        i++;
    }
    return array1;
}
console.log(arregloOrdenado(array1)); */