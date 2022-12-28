/*intro a clases y herencias*/
class Animales {

    #especie = "";
    #nombre = "";
    edad = 0;

    /* Atributo privado solo se usa dentro de la misma clase
    #especie = "felis catus";*/
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;

    }

    canta() {
        return `${this.nombre} puede cantar`;
    }

    correr() {
        return `${this.nombre} puede correr`;
    }

    getEspecie() {
        return "Soy un " + this.#especie;
    }

    setEspecie(especie) {
        this.#especie = especie;
    }
}

/*
let gato = new Animales("Gato", "felis catus");
console.log(gato.canta());
console.log(gato.correr());*/

class Gatos extends Animales {

    constructor(nombre, edad, colorBigotes) {
        super(nombre, edad);
        this.colorBigotes = colorBigotes;
    }

    bigotes() {
        return `Tengo bigotes color ${this.colorBigotes}`;
    }

    anios() {
        return `Tengo ${this.edad} años`;
    }

    especieGato() {
        return this.getEspecie();
    }
}

let animal = new Animales("gato", "5");
let gato = new Gatos("gato", 5, "blancos");
animal.setEspecie("felis Catus");
console.log(gato.colorBigotes);
console.log(gato.bigotes());
gato.setEspecie("felis Catus");
console.log(gato.correr());
console.log(gato.anios());
console.log(gato.especieGato());
/*console.log(animal._especie);*/
console.log(animal.colorBigotes);
