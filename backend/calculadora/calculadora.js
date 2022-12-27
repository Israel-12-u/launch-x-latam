function suma() {
    let number1 = document.getElementById("numero1").value;
    let number2 = document.getElementById("numero2").value;
    let resultadoEtiqueta = document.getElementById("result");
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let result = number1 + number2;
    resultadoEtiqueta.innerHTML = result;
}

function resta() {
    let number1 = document.getElementById("numero1").value;
    let number2 = document.getElementById("numero2").value;
    let resultadoEtiqueta = document.getElementById("result");
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let result = number1 - number2;
    resultadoEtiqueta.innerHTML = result;
}

function multiplicacion() {
    let number1 = document.getElementById("numero1").value;
    let number2 = document.getElementById("numero2").value;
    let resultadoEtiqueta = document.getElementById("result");
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let result = number1 * number2;
    resultadoEtiqueta.innerHTML = result;
}

function divicion() {
    let number1 = document.getElementById("numero1").value;
    let number2 = document.getElementById("numero2").value;
    let resultadoEtiqueta = document.getElementById("result");
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let result = number1 / number2;
    resultadoEtiqueta.innerHTML = result;
}

function potencia() {
    let number1 = document.getElementById("numero1").value;
    let number2 = document.getElementById("numero2").value;
    let resultadoEtiqueta = document.getElementById("result");
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let result = Math.pow(number1, number2);
    ;
    resultadoEtiqueta.innerHTML = result;
}

function raizCuadrada() {
    let number1 = document.getElementById("numero1").value;
    let number2 = document.getElementById("numero2").value;
    let resultadoEtiqueta = document.getElementById("result");
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let result = Math.pow(number1, 1 / number2);
    ;
    resultadoEtiqueta.innerHTML = result;
}

function residuo() {
    let number1 = document.getElementById("numero1").value;
    let number2 = document.getElementById("numero2").value;
    let resultadoEtiqueta = document.getElementById("result");
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let result = number1 % number2;
    resultadoEtiqueta.innerHTML = result;
}

function reset() {
    let number1 = document.getElementById("numero1");
    let number2 = document.getElementById("numero2");
    number1.value = 0;
    number2.value = 0;
    let resultadoEtiqueta = document.getElementById("result");
    resultadoEtiqueta.innerHTML = 0;
}