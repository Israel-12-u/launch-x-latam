function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + "px";
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + "px";
}
let btnSi = document.getElementById('btn_si');
let btnNo = document.getElementById('btn_no');
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function (e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function (e) {
    alert("sabia que dirias que si, casemonos ya y tengamos hijos, TE AMO!!!! ❤️");
    divModoSexo.style.display = 'block';
    const cancion = new Audio('img\\modo_sexo.mp3');
    //cancion.play()
});

divModoSexo.addEventListener('click', function (e) {
    /* divModoSexo.innerHTML = '<img src="https://th.bing.com/th/id/OIP.YzdgQNiYrJ1fyrjtHq6ozQHaG9?pid=ImgDet&rs=1"></img>'; */
    const img = document.createElement('img');
    img.src = "https://th.bing.com/th/id/OIP.YzdgQNiYrJ1fyrjtHq6ozQHaG9?pid=ImgDet&rs=1"
    console.log(img)
    divModoSexo.appendChild(img);

})

botones = document.getElementsByTagName("button")
console.log(botones);

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
});