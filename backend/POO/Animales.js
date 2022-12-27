class Animales {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especia = especie;

    }

    canta() {
        return this.nombre + " puede cantar";
    }
}

let gato = new Animales("Gato", "felis catus");
console.log(gato.canta());