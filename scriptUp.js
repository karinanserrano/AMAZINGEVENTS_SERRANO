let tarjetasUp =[];
for (const evento of data.events) {
        if(evento.date > data.currentDate){
            tarjetasUp.push(evento);
        }
}
  
let tarjUp = document.getElementById('tarjUp');
crearCards(tarjetasUp,"tarjUp");