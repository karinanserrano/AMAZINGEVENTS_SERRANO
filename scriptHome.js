const contenedor = document.getElementById('contenedor');
const checkCateg=  document.getElementById('cate');
const buscador = document.getElementById("buscador");
let categorias = filtrarXCate(data.events);
let eventos = data.events
mostrarCards(eventos,contenedor);

mostrarChecks(categorias,checkCateg);

checkCateg.addEventListener("change",()=>filtro(eventos))

buscador.addEventListener("input",()=>filtro(eventos))

contenedor.addEventListener("change",()=>filtro(eventos))

