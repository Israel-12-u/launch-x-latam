/* Con Promesas */

function leerCarta(carta) {
    return (new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(carta.split("").reverse().join(""));
        }, 2000);
    })
    );
}

function construirJuguete(instruccion) {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                const juguete = instruccion.split("").reverse().join("");
                if (juguete.includes("madera")) {
                    return (resolve(`${juguete} de madera fina`));
                } else if (juguete.includes("xbox")) {
                    return (resolve(`No te puedo mandar tu ${juguete}`));
                } else {
                    return (resolve(`Aqui tiene tu cochinada ${juguete}`));
                }

                resolve(juguete);
            }, 5500);
        })
    );
}

function envolverRegalo(juguete, callback) {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`${juguete} envuelto`);
            }, 3000);
        })
    );
}

leerCarta("xbox series x")
    .then((instruccion) => { 
        return construirJuguete(instruccion)
    })
    .then((juguete) => {
        return envolverRegalo(juguete);
    })
    .then(console.log);