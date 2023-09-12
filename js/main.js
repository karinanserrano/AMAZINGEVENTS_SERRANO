
let apiURL = 'https://mindhub-xj03.onrender.com/api/amazing'

/* //el fetch devuelve una promesa y se controla con then
fetch(apiURL).then(respuesta =>{
    console.log(respuesta);
    return respuesta.json();
}).then(data=>{
    console.log(data)
    mostrarCards(data.events,contenedor);
}).catch(error=> console.log(error)); */

// manejar una promesa dentro de una funcion

let eventos = [];

async function getEventos(callback) {
    try {
        const respuesta = await fetch(apiURL);
        const data = await respuesta.json();
        for (const evento of data.events) {
            eventos.push(evento)
        }
        
        callback(eventos,data)
    } catch (error) {
        console.log(error)
    }

}


function mostrarCards(arr, contenedor) {
    console.log(arr)
    if (arr.length == 0) {
        contenedor.innerHTML = `<h3>No event was found with that data.</h3>`
        return
    }
    let cardi = ""
    arr.forEach(element => {
        cardi += crearCards(element)
    });
    contenedor.innerHTML = cardi;

}
function crearCards(evento) {
    return `<div class="col-12 col-sm-6 col-md-4 col-xl-3">
       <div class="card">
        <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
        <div class="card-body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <div class="card-detalle">
                <p class="card-text">Price: $${evento.price}</p>
                <a class="btn btn-primary" href="./details.html?id=${evento._id}" role="button">Details</a>
            </div>
        </div>
        </div>
    </div>`;
}

function mostrarChecks(arr, contenedor) {
    console.log(arr)
    let checki = ''
    arr.forEach(el => {
        checki += crearChecks(el)
    });
    contenedor.innerHTML = checki
}

function crearChecks(category) {
    console.log(category)
    return `<div class="form-check">
            <input class="form-check-input checkCate" type="checkbox" name="category" value="${category}" >
            <label class="form-check-label" for="cat">
            ${category}
            </label>
          </div>`
}

function filtrarXCate(arr) {
    console.log(arr)
    let ar = arr.map(el => el.category).filter((categoria, indice, categorias) => categorias.indexOf(categoria) === indice)
    console.log(ar);
    return ar;
}

function categoriasFiltadas(arr) {
    console.log(arr);
    let checkboxes = Array.from(document.getElementsByClassName("form-check-input"))
    console.log(checkboxes)
    let checks = checkboxes.filter(check => check.checked)
    let valores = checks.map(ch => ch.value)
    if (valores.length == 0) {
        console.log(arr);
        return arr
    }
    let arregloFiltrado = arr.filter(evento => valores.includes(evento.category))
    console.log(arregloFiltrado)
    return arregloFiltrado
}

function buscarXTexto(arr, texto) {
    let arregloFiltrado = arr.filter(el =>
        el.name.toLowerCase().includes(texto.trim().toLowerCase())
        || el.description.toLowerCase().includes(texto.trim().toLowerCase()))
    return arregloFiltrado;
}

function filtro(eventos) {
    console.log(eventos)
    let filtro1 = categoriasFiltadas(eventos)
    let filtro2 = buscarXTexto(filtro1, buscador.value)
    mostrarCards(filtro2, contenedor)
}

function crearCardDetalle(evento) {
    return `
    <div class="imagen">    
        <img src="${evento.image}" alt="Prueba evento">
        <div>
        <p>Name: ${evento.name}</p>
        </div>
    </div>
    <div class="dtll">
        <div>
        <p>Description :${evento.description}</p>
        </div>        
        <div>
        <p>Date: ${evento.date}</p>
        </div>
        <div>
        <p>Category: ${evento.category}</p>
        </div>
        <div>
        <p>Place: ${evento.place}</p>
        </div>
        <div>
        <p>Price: $${evento.price}</p>
        </div>
        <div>
        <p>Assistance: ${evento.assistance}</p>
        </div>
        <div>
        <p>Capacity: ${evento.capacity}</p>
        </div>
     
    </div>`
}

function mostrarCardDetalles(evento, contenedor) {

    let deta = crearCardDetalle(evento);
    contenedor.innerHTML = deta;
}

