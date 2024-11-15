function intercambio(origen,destino){
    let padreOrigen = origen.parentElement;
    let padreDestino = destino.parentElement;

    console.log(origen);

    console.log(padreDestino + "  ----  " + padreOrigen);

    let nuevo=document.createElement("td");
    let nodoTexto=document.createTextNode("hola");

    nuevo.appendChild(nodoTexto);

    let txt=origen.firstChild.nodeValue;

    nodoTexto.nodeValue=txt;
    nuevo.id=origen.id;

    return nuevo;
}
