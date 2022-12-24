/* for (let i = 0; i < 19; i++) {
    console.log(i);
    if ((i % 2) != 0) {
        continue;
    }
    if (i === 10) {
        break;
    }
    console.log(i);
}

var1 = null;
var2 = 0;
var3 = false;
var4 = '';
var5 = undefined;

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);

console.log("-----------------------if else--------------------------------")


function validarEdad(edad) {
    if (confirm("Estas de acuerdo de seguir con esto")) {
        console.log("sigue bajo tu propio riesgo");
        if (edad >= 18 && edad <= 150) {
            console.log("Puedes comprar cigarritos");
        } else if (edad > 150) {
            console.log("Me saludas a Valentin Elizalde");
        } else if (edad > 0 && edad < 18) {
            console.log("Tas chiquito")
        } else {
            console.log("A jijo tu ni exixtes :V");
        }
    } else {
        console.log("Miedoso jiji")
    }
}

function mandarMensajes(edad) {
    console.log(edad);
    switch (edad) {
        case 13:
            console.log("Deberias de estaar en la secundaria");
            break;
        case 17:
            console.log("Esperate un año mas");
            break;
        case 5:
            validarEdad(edad);
            break;
        default:
            console.log("No se que decir");
    }
}

/* if else */
/* let edad = prompt("introduce tu edad:");
if (edad && !isNaN(edad)) {
    edad = Number(edad);
    validarEdad(edad);
    mandarMensajes(edad);
} else {
    alert("Debes de Introducir tu edad");
    location.reload();
}

/* while */

/* let boletosDisponibles = 100000;
while (boletosDisponibles > 0) {
    console.log("BBoleto comprado para el Corona Capital");
    boletosDisponibles--;
    console.log("Quedan: " + boletosDisponibles)
    console.log("------------")
} */

/* do While */
/* do {
    console.log("BBoleto comprado para el Corona Capital");
    boletosDisponibles--;
    console.log("Quedan: " + boletosDisponibles);
} while (boletosDisponibles > 0); */

/* try cactch finally */
try {
    // Codigo subsetible a fallar
    throw "orden 66";
} catch (error) {
    console.error("ERROOOOOOR!!");
    console.warn(error);
} finally {
    console.warn("Tu crush no te quiere 🥲")
}