let contenedor = document.getElementById('contenedor');
let checkCateg = document.getElementById('cate');
let buscador = document.getElementById("buscador");

getEventos(iniciarPast);

function iniciarPast(eventos, data) {
    let categorias = filtrarXCate(data.events);
    let tarjetasPast = [];
    for (const evento of eventos) {
        if (evento.date < data.currentDate) {
            tarjetasPast.push(evento);
        }
    }
    mostrarCards(tarjetasPast, contenedor);

    mostrarChecks(categorias, checkCateg)

    checkCateg.addEventListener("change", () => filtro(tarjetasPast))

    buscador.addEventListener("input", () => filtro(tarjetasPast))

    contenedor.addEventListener("change", () => filtro(tarjetasPast))
}



