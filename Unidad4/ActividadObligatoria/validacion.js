/* Ejercicio 2 */
function validarN(n){
    let expresion = /^[A-Z][a-z]{2,30}$|^([A-Z][a-z]{2,30}\s?){1,3}[A-Z][a-z]{2,30}$/;
    return expresion.test(n);
}

function validarEdad(x){
    let expresion = /^(10[0-5])$|^([1-9]?[0-9])$/;
    return expresion.test(x);
}

function validadNif(n){
    let expresion = /^[0-9]{8}-[A-Z]$/;
    return expresion.test(n);
}

function validarEmail(x){
    let exp = /^[A-Za-z0-9]+@gmail.com$/;
    return exp.test(x);
}

function validarFecha(f){
    let exp = /^([0-2][0-9]|3[0-1])-([0-1][0-2])-(1[0-9]{3}|20[0-2][0-4])$/;
    return exp.test(f);
}

function validarTel(t){
    let exp = /^[0-9]{9}$/;
    return exp.test(t);
}

function validarHora(h){
    let exp = /^[0-9]{2}:[0-9]{2}$/;
    return exp.test(h);
}

function validarProvincia(p){
    let exp = /^(0|CU|LU|OU|P)$/;
    return exp.test(p);
}

let boton = document.getElementById("enviar");

boton.addEventListener("click",function(event){
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let edad = document.getElementById("edad");
    let nif = document.getElementById("nif");
    let email = document.getElementById("email");
    let provincia = document.getElementById("provincia");
    let fecha = document.getElementById("fecha");
    let hora = document.getElementById("hora");
    let tel = document.getElementById("telefono");
    let errores = document.getElementById("errores");
    let error = "";

    if(!validarN(nombre.value)){
        error+="Nombre incorrecto.\n";
        event.preventDefault();
        nombre.focus();
    }else if(!validarN(apellidos.value)){
        error+="Apellidos incorrectos.\n";
        event.preventDefault();
        apellidos.focus();
    }else if(!validarEdad(edad.value)){
        error+="Edad incorrecta\n";
        event.preventDefault();
        edad.focus();
    }else if(!validadNif(nif.value)){
        error+="NIF incorrecto\n";
        event.preventDefault();
        nif.focus();
    }else if(!validarEmail(email.value)){
        error+="Email incorrecto.\n";
        event.preventDefault();
        email.focus();
   /*  }else if(!validarProvincia(provincia.select.value)){
        error+="Provincia incorrecta\n";
        event.preventDefault();
        provincia.focus(); */
    }else if(!validarFecha(fecha.value)){
        error+="Fecha incorrecta\n";
        event.preventDefault();
        fecha.focus();
    }else if(!validarTel(tel.value)){
        error+="Teléfono incorrecto\n";
        event.preventDefault();
        tel.focus();
    }else if(!validarHora(hora.value)){
        error+="Hora incorrecta\n";
        event.preventDefault();
        hora.focus();
    }
    errores.innerHTML=error;
})