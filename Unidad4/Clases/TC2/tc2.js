class Vehiculo{
    constructor(combustible, medio, pilotos){
        this.combustible=combustible;
        this.medio=medio;
        this.pilotos=pilotos;
    }

    informar(){
        return "Combustible: " + this.combustible + "\nMedio: " + this.medio + "\nPilotos: " + this.pilotos;
    }

    esEco(){
        if(this.combustible=="eléctrico"){
            return true;
        }else{
            return false;
        }
    }
}

class Tractor extends Vehiculo{
    constructor(ruedas,catalizador){
        super("diesel","tierra",1);
        this.ruedas=ruedas;
        this.catalizador=catalizador;
    }

    informar(){
        return "Un tractor se utiliza para el campo: \n" +super.informar()
    }

    esVerde(){
        if(super.esEco()==true || this.catalizador==true){
            return "Es un tractor verde";
        }else{
            return "Es contaminante";
        }
    }
}

let coche = new Vehiculo("diesel","tierra",1);
let avion = new Vehiculo("queroseno","aire",2);
let tractor1 = new Tractor(4,false);
let tractorV = new Tractor(6,true);

console.log(coche.informar() + "\n" + coche.esEco());
console.log(avion.informar() + "\n" + avion.esEco());
console.log(tractor1.informar() + "\n" + tractor1.esVerde());
console.log(tractorV.informar() + "\n" + tractorV.esVerde());