# TypeScript

- Se usa para compilar JS
- Se tiene que instalar en la rama dev

## Instalación

```node
     npm i --save-dev typescript
```

## Para ejecutar un archivo de TS

```node
    npx ts-node src/index.ts
```

## Diferencias de TypeScript y JavaScript

```TypeScript
function timeout(n: number) {
    return new Promise((res => setTimeout(res, n)))
}

export async function addNumber(a: number, b: number) {
    await timeout(1000)
    return a + b
}

; (async () => {
    console.log(await addNumber(3, 4))
})()
```

- TypeScript es un lenguaje declarativo a diferencia de JS, ademas de que TypeScript se compila

```js
function timeout(n) {
  return new Promise((res) => setTimeout(res, n));
}

async function addNumber(a, b) {
  await timeout(1000);
  return a + b;
}

(async () => {
  console.log(await addNumber(3, 4));
})();
```

## Para que funcione el TS

- Configurar el tsconfig

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "target": "ES6" /* vercion recomenda para que funcione de manera correcta */
  },
  "include": [
    "src"
  ] /* carpera donde se va a compilar o se estan guardando los archivos de ts */
}
```
