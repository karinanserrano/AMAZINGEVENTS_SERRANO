let contenedor = document.getElementById('contenedor');
let checkCateg = document.getElementById('cate');
let buscador = document.getElementById("buscador");

getEventos(iniciarUp);

function iniciarUp(eventos, data) {
    let categorias = filtrarXCate(eventos);
    let tarjetasUp = [];
    for (const evento of eventos) {
        if (evento.date > data.currentDate) {
            tarjetasUp.push(evento);
        }
    }
    mostrarCards(tarjetasUp, contenedor)

    mostrarChecks(categorias, checkCateg)

    checkCateg.addEventListener("change", () => filtro(tarjetasUp))

    buscador.addEventListener("input", () => filtro(tarjetasUp))

    contenedor.addEventListener("change", () => filtro(tarjetasUp))

}

