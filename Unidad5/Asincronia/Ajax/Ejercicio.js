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

let userId, edad, url;

function call(datos){
    let array = JSON.parse(datos);
    /* console.log(array); */
    for(let x of array){
        if(x.title == "quos omnis officia"){
            console.log(x);
            userId = x.userId;
        }
    }
    getDataFromAPI("https://dummyjson.com/users",caca)
}

function caca(datos){
    let object = JSON.parse(datos);
    let array = object.users;
    for(let x of array){
        if(x.id == userId){
            edad = x.age;
        }
    }
    getDataFromAPI("https://jsonplaceholder.typicode.com/photos",imagen);
}

function imagen(datos){
    let object = JSON.parse(datos);
    for(let x of object){
        if(x.id == edad){
            url = x.url;
        }
    }
    let img = document.getElementById("imagen");
    img.setAttribute("src",url);
}

getDataFromAPI("https://jsonplaceholder.typicode.com/albums",call);



