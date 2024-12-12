/* Ejercicio 2 */
function validarN(n){
    let expresion = /^[A-Z][a-z]{2,30}$|^([A-Z][a-z]{2,30}\s?){1,3}[A-Z][a-z]{2,30}$/;
    if(expresion.test(n)){
        return true;
    }else{
        return false;
    } 
}

function validarEdad(x){
    let expresion = /^(1[0-9]{1,2})$|^([1-9]{1,2})$/;
    if(expresion.test(x)){
        return true;
    }else{
        return false;
    }
}

function validadNif(n){
    let expresion = /^[0-9]{8}[A-Z]$/;
    if(expresion.test(n)){
        return true;
    }else{
        return false;
    }
}

let error = "";
let nombre = document.getElementById("nombre").value;
let apellidos = document.getElementById("apellidos").value;
let edad = document.getElementById("edad").value;
let nif = document.getElementById("nif").value;

if(!validarN(nombre)){
    error+="Nombre mal introducido \n";
}else if(!validarN(apellidos)){
    error+="Apellidos mal introducidos \n";
}else if(!validarEdad(edad)){
    error+="Edad introducida incorrecta \n";
}else if(!validadNif(nif)){
    error+="NIF introducido incorrecto \n";
}

