const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementsById('result');

botonNumeros.forEach(function(boton){
  boton.addEventListener('click', function(){
    // agregarNumero();
    return alert(boton.innerText);
  })
})
