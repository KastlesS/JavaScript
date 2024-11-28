class Figura{
    constructor(dimesiones, color){
        this.dimesiones=dimesiones;
        this.color=color;
    }

    informar(){
        return "Dimensiones: " + this.dimesiones + " \nColor: " + this.color; 
    }
};

class Cuadrado extends Figura{
    constructor(dimesiones, color, longitud){
        super(dimesiones,color);
        this.longitud=longitud;
    }

    perimetro(){
        return "Perímetro: " + (this.longitud*4);
    }
}

let cuadrado = new Cuadrado(2,"azul",2);
console.log(cuadrado.perimetro());