class Figura{
    constructor(dimensiones, lados, color){
        this.dimensiones=dimensiones;
        this.lados=lados;
        this.color=color;
    }

    informar(){
        return "Dimensiones: " + this.dimensiones + " \nLados: " + this.lados + " \nColor: " + this.color; 
    }
}

let cuadrado1 = new Figura(2,4,"verde");
let rectangulo1 = new Figura(2,4,"rojo");
let circulo1 = new Figura(2,1,"azul");