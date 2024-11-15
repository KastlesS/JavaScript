//Recogemos los botones de las funciones
const bub = document.getElementById("botBub");
const cap = document.getElementById("botCapt");
const del = document.getElementById("botStop");

//Recogemos los elementos principales del HTML
const padre = document.getElementById("myDiv");
const parra = document.getElementById("myP");

//Creamos las funciones para cambiar el texto al pulsar el botón
function cambiarBubling(){
    let padre = document.getElementById("myDiv");
    padre.firstElementChild.textContent="BUBBLING";
}

function cambiarCap(){
    let padre = document.getElementById("myDiv");
    padre.firstElementChild.textContent="CAPTURING";
}

function cambiarDel(){
    let padre = document.getElementById("myDiv");
    padre.firstElementChild.textContent="EVENTO DESACTIVADO";
}

//Añadimos los eventos a esos botones
bub.addEventListener("click",()=>{
    padre.addEventListener("click",divPadre);
    parra.addEventListener("click",parrafo);
    cambiarBubling();
});
cap.addEventListener("click",()=>{
    padre.addEventListener("click",divPadre);
    parra.addEventListener("click",parrafo);
    cambiarCap();
});

del.addEventListener("click",()=>{
    cambiarDel();
    borrar();
});

//Creamos las funciones para alertar cuando hacer click el usuario en otros elementos HTML
function divPadre(){
    alert("Has hecho click en el elemneto naranja");
}

function parrafo(){
    alert("Has hecho click en el párrafo");
}

//Borramos los eventos al hacer click en el boton desactivar
function borrar(){
    padre.removeEventListener("click",divPadre);
    parra.removeEventListener("click",parrafo);
}