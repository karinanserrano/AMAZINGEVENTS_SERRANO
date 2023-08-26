let tarjetasPast =[];
for (const evento of data.events) {
        if(evento.date < data.currentDate){
            tarjetasPast.push(evento);
        }
}
  
let tarjUPast = document.getElementById('tarjUPast');
crearCards(tarjetasPast,"tarjPast");