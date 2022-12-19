/* encontrar elementos en html */

const titulo = document.getElementById("titulo1");
const parrafo = document.getElementsByTagName('p');
const links = document.getElementsByClassName('links');
/* 
    Otra opcióon para encontrar elementos en HTML
const titulo2 = document.querySelector("[id=titulo]"); */

/* cambiar valores de html */
titulo.innerHTML = "Titulo cambiado con JS";
document.getElementById("demo").innerHTML = "The text in the first paragraph (index 0) is: " + parrafo[0].innerHTML;
links[0].href = "https://www.youtube.com/";
links[0].target = "_blank";

function cambiartexto(obj){
    obj.innerHTML ="Texto clickeado"
}

function nOver(obj){
    obj.innerHTML ="Mouse over now"
}

function nOut(obj){
    obj.innerHTML ="Mouse out"
}

function mDown(obj){
    obj.style.backgroundColor = rgb(255,255,34);
    obj.innerHTML = "Sueltame";
}

function mUp(obj){
    obj.style.backgroundColor = rgb(1,1,113);
    obj.innerHTML = "Gracias";
}

const boton = document.getElementById("boton1");
boton.addEventListener("click",alerta);
function alerta(){
    alert("Esto es una Alerta de JS");
}