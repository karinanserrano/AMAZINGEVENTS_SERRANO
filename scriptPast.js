const contenedor = document.getElementById('contenedor');
const checkCateg=  document.getElementById('cate');
const buscador = document.getElementById("buscador");
let categorias = filtrarXCate(data.events);
let tarjetasPast =[];
for (const evento of data.events) {
        if(evento.date < data.currentDate){
            tarjetasPast.push(evento);
        }
}
  
mostrarCards(tarjetasPast,contenedor);

mostrarChecks(categorias,checkCateg)

checkCateg.addEventListener("change",()=>filtro(tarjetasPast))

buscador.addEventListener("input",()=>filtro(tarjetasPast))

contenedor.addEventListener("change",()=>filtro(tarjetasPast))