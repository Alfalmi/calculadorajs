class Display {
   
   
    constructor(displayValorAnterior, displayValorActual) {
this.displayValorAnterior = displayValorAnterior;
this.displayValorActual = displayValorActual;
this.calculadora = Calculadora();
this.valorActual = '';
this.valorAnterior = '';

    }

    agregarNumero(numero) {
        this.valorActual = numero;
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }


}