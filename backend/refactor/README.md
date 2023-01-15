# Refactorizacion de codigo

- es hacer mas eficionete el codigo

### ejemplo sin refactorizar

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
