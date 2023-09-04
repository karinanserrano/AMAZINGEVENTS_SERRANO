const contenedor = document.getElementById('contenedor');
const checkCateg=  document.getElementById('cate');
const buscador = document.getElementById("buscador");
let categorias = filtrarXCate(data.events);
let tarjetasUp =[];
for (const evento of data.events) {
        if(evento.date > data.currentDate){
            tarjetasUp.push(evento);
        }
}
console.log(tarjetasUp)  

mostrarCards(tarjetasUp,contenedor)

mostrarChecks(categorias,checkCateg)

checkCateg.addEventListener("change",()=>filtro(tarjetasUp))

buscador.addEventListener("input",()=>filtro(tarjetasUp))

contenedor.addEventListener("change",()=>filtro(tarjetasUp))