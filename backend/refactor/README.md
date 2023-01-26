# Refactorizacion de codigo

- Es hacer mas eficiente el codigo

### Ejemplo sin refactorizar

```js
function mifuncion() {
    return "Algo";
}

mifuncion()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("Error");
    });
```

### Ejemplo refactorizado

```js
function mifuncion() {
    return "Algo";
}

try {
    const data = await mifuncion();
    console.log(data);
} catch (err) {
    console.log("Error");
}
```

### use strict

- Permite hacer codigo mas limpio forsomente debido a
  que JS se vuelve menos permisivo
- Para usarlo solo es cuestion de poner la siguiente linea de codigo en tu archivo JS

````JS
    'use strict'
````

### eslint

- Se Instala con el siguiete comando desde terminal y debe guardarce en el dev
````cmd
  npm install eslint --save-dev
````
- Para la configuracion se debe de ejecutar el siguiente comando
````cmd
  npm init @eslint/config
````
- Para que cheque los errores que tienes en tu codigo usar el siguiente comando
````
  npx eslint ./
````

# Documentar

- Instalar el siguiete paquete para realizar doumentacion
````cdm
  npm instal --save-dev jsdoc
````

## jsdoc
- Es necesario comentar el codigo para una buena documentacion

## Servidor Flexible
- Es un servidor que se actualiza entre mas demananda de recuros


