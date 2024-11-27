/* Creamos una función para añadir un nuevo botón */
function añadir(){
    /* Obtenemos el padre (div) */
    let padre = document.getElementById("div1");
    /* Creamos un nuevo elemento de tipo botón */
    let boton = document.createElement("button");
    /* Le añadimos texto al botón */
    boton.innerHTML = "Este es un botón nuevo :)";
    /* Añadimos el botón al padre */
    padre.appendChild(boton);
}

/* Creamos el evento para el botón con id = b */
let boton = document.getElementById("b");
boton.addEventListener("click",añadir);