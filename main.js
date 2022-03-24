let modoOscuro = document.querySelector('#dark-mode');
let modoClaro = document.querySelector('#light-mode');
let colorPortada = document.querySelector('.portada');
let body = document.querySelector('.container');
let icons = document.querySelector('.icons');
// let titulo = document.querySelector('.titulo');
let contador = 0;


modoOscuro.addEventListener('click', function(){
    if (contador == 0) {
        body.style.background = "#000";
        colorPortada.style.background = "blue";
        titulo.style.color = "#fff";
        contador = 1;
    }else{
        body.style.background = "#fff";
        colorPortada.style.background = "#000";
        titulo.style.color = "yellow";
        contador = 0;
    }
})