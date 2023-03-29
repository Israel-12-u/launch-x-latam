
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

