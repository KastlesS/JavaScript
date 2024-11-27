/* Obtenemos el elemento padre de la lista */
let padre = document.getElementById("task-list");

/* Obtenemos todos los elementos li */
let li = padre.querySelectorAll("li");

/* Añadimos un evento a cada hijo de li (cada botón) con una función flecha*/
for(let i=0;i<li.length;i++){
    li[i].firstElementChild.addEventListener("click",()=>{
        padre.removeChild(li[i]);
    });
}