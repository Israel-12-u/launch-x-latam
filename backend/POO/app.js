console.log("Hola Mundo!!");

let nombres = {
    nombre: "Jesus", apellido: "Perez"
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));
console.log(nombres);

/*function perro(nombre, edad) {
    let perro = Object.create(ObjetoConstructor);
    perro.nombre = nombre;
    perro.edad = edad;
    return perro;
}*/

function perro(nombre, edad) {
    perro.nombre = nombre;
    perro.edad = edad;
}

perro.prototype.habla = function () {
    return "Soy un perro woof woof"
}
/*let ObjetoConstructor = {
    habla: function () {
        return "soy un perro woof woof";
    }
};*/

let firulais = new perro("firulais", 9);
console.log(firulais.habla());

