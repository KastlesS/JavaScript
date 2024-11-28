class Figura{
    constructor(dimensiones,color){
        this.dimensiones=dimensiones;
        this.color=color;
    }

    informar(){
        return "Dimensiones: " + this.dimensiones + " \n Color: " + this.color; 
    }
}

class Cuadrado extends Figura{
    constructor(dimensiones,color,longitud){
        super(dimensiones,color);
        this.longitud=longitud;
    }

    informar(){
        return "Dimensiones: " + this.dimensiones + " \nColor: " + this.color + " \nSuperficie: " + (this.longitud*this.longitud); 
    }

    perimetro(){
        return "Perímetro: " + (this.longitud*4);
    }
}

let cuadrado = new Cuadrado(2,"verde",2);
console.log(cuadrado.informar());
console.log(cuadrado.perimetro());