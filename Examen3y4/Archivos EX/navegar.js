/* Creamos la constante tabla */
const tabla = document.getElementById("mitabla");

/* Ahora tenemos que llegar al centro de la tabla, por lo tanto voy a ir paso a paso */
/* Obtengo el primer hijo de la tabla (tbody) */
let cuerpoTabla = tabla.firstElementChild;
/* Voy al segundo hijo del tbody */
let segundoHijoTbody = cuerpoTabla.children[1];
/* Por último voy al segundo hifo del tr */
let central = segundoHijoTbody.children[1];

/* Ahora tenemos que navegar hasta arriba a la derecha (voy a crear nuevas variables para ver el proceso inverso)*/
/* Obtenemos el padre de central */
let padreCentral = central.parentElement;
/* Voy al primer hermano de padreCentral */
let hermano = padreCentral.previousElementSibling;
/* Por último obtengo el tercer hijo de hermano */
let derechaArriba = hermano.children[2];

/* Ahora tenemos que navegar desde central hasta abajo a la izquierda */
/* Obtenemos el padre de central (otra vez ;) ) */
let padreCentral2 = central.parentElement;
/* Vamos a su siguiente hermano */
let hermano2 = padreCentral2.nextElementSibling;
/* Vamos al primer hijo de hermano2 */
let izquierdaAbajo = hermano2.children[0];

/* Declaramos varibles para guardar el contenido original de las celdas */
let texto1 = derechaArriba.textContent;
let texto2 = izquierdaAbajo.textContent;

/* Ahora añadimos los eventos para que cuando pase el ratón se modifique el contenido*/
derechaArriba.addEventListener("mouseenter",()=>{
    derechaArriba.textContent="O";
})

derechaArriba.addEventListener("mouseleave",()=>{
    derechaArriba.textContent=texto1;
})

izquierdaAbajo.addEventListener("mouseenter",()=>{
    izquierdaAbajo.textContent="O";
})


izquierdaAbajo.addEventListener("mouseleave",()=>{
    izquierdaAbajo.textContent=texto2;
})
