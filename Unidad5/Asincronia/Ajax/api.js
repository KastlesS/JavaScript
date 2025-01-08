function getDataFromAPI(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(this.response);
        } else {
            console.log("Se ha producido un error " + xhr.status + ": " + xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.log("Se ha producido un error " + xhr.status + ": " + xhr.statusText);
    };

    xhr.send();
}

/* function getDataFromAPI(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(this.response);
        } else {
            console.log("Se ha producido un error " + xhr.status + ": " + xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.log("Se ha producido un error " + xhr.status + ": " + xhr.statusText);
    };

    xhr.send("category=music");
} */


getDataFromAPI('https://api.chucknorris.io/jokes/categories',chuck);

function chuck(datos){
    let categorias = JSON.parse(datos);
    console.log("Hay " + categorias.length + " categorías de chistes");
}

function terceraCategoria(datos){
    let categorias = JSON.parse(datos);
    console.log("La tercera categorías es: " + categorias[2]);
}

getDataFromAPI('https://api.chucknorris.io/jokes/categories',terceraCategoria)

function chistes(datos){
    let chist = JSON.parse(datos);
    console.log(chist["value"]);
}

getDataFromAPI('https://api.chucknorris.io/jokes/random?category=music',chistes);