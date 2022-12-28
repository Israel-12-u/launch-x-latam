/*Polimorfismo*/
function Persona(nombre) {
    this.nombre = nombre;
    this.caminar = function () {
        console.log("CAMINANDO");
    }
}

function Alumno(nombre, llorandoSangre) {
    /*call permite llamar a una funcion*/
    Persona.call(this, nombre);
    this.llorandoSangre = llorandoSangre;
    this.caminar = function () {
        console.log("Caminando y llorando sangre")
    }
}

Alumno.prototype = Object.create(Persona.prototype);
Alumno.prototype.constructor = Alumno;

let estudiante1 = new Alumno("Jesus Guzman", "React");
let persona1 = new Persona("Memmo Ochoa");

console.log(estudiante1.caminar());
console.log(persona1.caminar())