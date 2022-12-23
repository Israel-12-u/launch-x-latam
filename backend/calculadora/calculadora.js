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