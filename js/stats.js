let contenedorStat = document.getElementById('tbody');
let contenedorUp = document.getElementById('tbodyUp');
let contenedorPast = document.getElementById('tbodyPast');

getEventos(cargarTabla);

function cargarTabla(eventos, data) {
    let eventosUp = [];
    let eventosPast = [];
    for (const evento of eventos) {
        if (evento.date > data.currentDate) {
            eventosUp.push(evento);
        } else { eventosPast.push(evento) }
    }
    console.log(eventosPast)
    console.log(eventosUp)

    //ordenarXPorcHigh(eventos);
    //ordenarXPorcLow(eventos);
    let ordXCapa = ordenarXCapacity(eventos);
    let reveUp = revenues(eventosUp);
    let revePast = revenues(eventosPast);
    mostrarHTML(ordXCapa, ordXCapa, ordXCapa, contenedorStat);
    mostrarHTMLxCate(reveUp,reveUp,reveUp,contenedorUp)

}

function revenues(eventos){
    return eventos
}

function mostrarHTMLxCate(col1, contenedor) {
    console.log(col1, contenedor)
    let tbodyHTML = "";
    for (let i = 0; i < 3; i++) {
        let columna1 = col1[i];
        let columna2 = col1[i];
        let columna3 = col1[i];
        tbodyHTML += `<tr>
        <td>${columna1.name} ${columna2.name} ${columna3.name} </td>
        
    </tr>`
    };
    contenedor.innerHTML = tbodyHTML;
}

function mostrarHTML(col1, col2, col3, contenedor) {
    console.log(col1, col2, col3, contenedor)
    let tbodyHTML = "";
    for (let i = 0; i < 3; i++) {
        let columna1 = col1[i];
        let columna2 = col2[i];
        let columna3 = col3[i];
        tbodyHTML += `<tr>
        <td>${columna1.name}</td>
        <td>${columna2.name}</td>
        <td>${columna3.name}</td>
    </tr>`
    };
    contenedor.innerHTML = tbodyHTML;
}

function ordenarXCapacity(eventos) {
    console.log(eventos);
    eventos.sort((eventoA, eventoB) => {
        return eventoB.capacity - eventoA.capacity
    })
    console.log(eventos);
    return eventos;
}

function ordenarXPorcHigh(eventos) {
    console.log(eventos)
    calcular(eventos)
    let porcentaje = 0;
    eventos.sort((evA, evB) => evA - evB)
    console.log(eventos)
}

function ordenarXPorcLow(eventos) {
    calcularPorc(eventos);
}

function calcular(eventos) {
    console.log(eventos);

    let desordenados = eventos.map(el => {
        (el.assistance / el.capacity) * 100;
    });
    console.log(desordenados)
    return desordenados;
}

