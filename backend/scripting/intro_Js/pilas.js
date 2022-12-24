/* PILAS */
class Pila {
    /* Toda clase tiene un constructor algo que la hace funcionar */
    constructor() {
        this.plia = {};
        this.contador = 0;
    }
    /* agrega elemento al final de la pila */
    push(element) {
        this.pila[this.contador] = element;
        this.contador++;
        return this.plia;
    }
    /* debuelve el ultimo elemto */
    pop() {
        this.contador--;
        const element = this.plia[this.contador];
        delete this.plia[this.contador];
        return element;
    }
    /* solo muestra el ultimo elemnto */
    peek() {
        return this.pila[this.contador - 1];
    }
    /* debuelve el tamaño de la pila */
    size() {
        return this.contador;
    }

    print() {
        console.log(this.pila);
    }
}

const miPila = new Pila();
console.log(miPila.size());
console.log(miPila.print());
console.log(miPila.push(""));