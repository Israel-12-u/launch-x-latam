let lista = [];

/* tipos de operadores logicos en js */
let x = 5;
let y = 10;

/* operador de asisnacion de adicion */
x += y;
x += y;

lista.push(x)
console.log(lista)
/* es lo mismo que hacer x = x + y */
console.log(x);

/* asignacion de resta */
y -= x;
console.log(y);
lista.push(y)
console.log(lista)

/* asignacion de multiplicacion */
x *= y;
console.log('X = ' + x);

x = 5;
y = 10;

/* operador de bit a bit de desplasamiento a la izquierda */
x <<= y;
console.log(x);
lista.push(x)
console.log(lista)

/* asignacion de modulo o residuo */
x = 5;
y = 10;
console.log(x % y);
lista.push(x)
console.log(lista)
y %= 5;
console.log(y);
lista.push(y);
console.log(lista);

/* estructura de control if */
let var1 = 3;
let var2 = 4;
/* operador igual */
if (var1 == var2) {
    console.log("son iguales");
} else {
    console.log("No son iguales");
}

/* operador estrictamente igual */
if (var1 === '3') {
    console.log("son iguales");
} else {
    console.log("No son iguales");
}

/* operador de desigualdad */
if (var1 != var2) {
    console.log("son diferentes");
} else {
    console.log("No son diferentes");
}

/* operador de desigualdad estricta  */
if (var1 !== '4') {
    console.log("son diferentes");
} else {
    console.log("No son diferentes");
}

/* > mayor que */
console.log(var1 > var2);

/* < menor que */
console.log(var1 < var2)
console.log(23 < 23);

/* <= menor o igual que */
console.log(23 <= 23);

/* >= mayo o igual que */
console.log(23 >= 23);