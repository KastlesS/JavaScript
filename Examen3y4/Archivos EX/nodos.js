/* Obtenemos el elemento tabla */
let tabla = document.getElementById("mitabla");

/* Obtenemos las filas de la tabla */
let filas = tabla.querySelectorAll("tr");

/* Añadimos a cada hijo de tr un evento de tipo click para cambiar el fondo */
for(let i=0;i<filas.length;i++){
    for(let k=0;k<filas.length;k++){
        filas[i].children[k].addEventListener("click",()=>{
            let tdInial = document.getElementById("inicio");
            filas[i].children[k].id=tdInial.id;
            tdInial.id="";
            filas[i].children[k].className=tdInial.className;
            tdInial.className="";
        })
    }
}
