# Refactorizacion de codigo

- Es hacer mas eficiente el codigo

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
