let contenedor = document.getElementById('contenedor');
let checkCateg=  document.getElementById('cate');
let buscador = document.getElementById('buscador');

getEventos(iniciar);

function iniciar(eventos){
    mostrarCards(eventos,contenedor);
    let categorias = filtrarXCate(eventos);
    mostrarChecks(categorias,checkCateg);
}

checkCateg.addEventListener("change",()=>filtro(eventos))

buscador.addEventListener("input",()=>filtro(eventos))

contenedor.addEventListener("change",()=>filtro(eventos))

