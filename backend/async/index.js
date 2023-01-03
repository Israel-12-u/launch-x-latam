/* Proseso asincrono clase */

http = require('http');

console.log("Hola");

/* Cuando se usa Get se hace una petición asincrona */

http.get("http://httpstat.us/200", (res) => {
    console.log(`La API devolvio ${res.statusCode}`)
});
console.log("Adios");

/* Hilo asincrono */
/* setTimeout(() => {
    console.log("Me has esperado")
}, 3000); */
