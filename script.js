const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonNumero = document.getElementById('.numero');
const botonOperador = document.getElementById(".operador");

const display = new Display(displayValorAnterior, displayValorActual);

botonNumero.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
    
});