let contenedorStat = document.getElementById('tbody');
let contenedorUp = document.getElementById('tbodyUp');
let contenedorPast = document.getElementById('tbodyPast');

getEventos(cargarTabla);

function cargarTabla(eventos, data) {
    let eventosUp = [];
    let eventosPast = [];
    let eventosOrde = eventos;
    for (const evento of eventos) {
        if (evento.date > data.currentDate) {
            eventosUp.push(evento);
        } else { eventosPast.push(evento) }
    }
    let ordenarXHi = ordenarXPorcHigh(eventos);
    let ordenarXLo = ordenarXPorcLow(eventos);
    let ordXCapa = ordenarXCapacity(eventosOrde);
    let reveUp = mapear(eventosUp);
    console.log(reveUp)
    // let revePast = revenues(eventosPast);
    mostrarHTML(ordenarXHi, ordenarXLo, ordXCapa, contenedorStat);
    mostrarHTMLxCate(reveUp, reveUp, reveUp, contenedorUp)

}

function revenues(eventos) {
    //calcular recibe el nombre y el porcentaje
    let arrayDeCategorias = []
    eventos.forEach((evento) => {
        let categoria = evento.category;
        let precio = evento.price;
        if (!arrayDeCategorias[categoria]) {
            arrayDeCategorias[categoria] = 0
        }
        arrayDeCategorias[categoria] += precio;
    });
    console.log(arrayDeCategorias);
    return eventos;
}


function mapear(eventos){
    let r =revenues(eventos);
    console.log(r)
    let cal =calcular(eventos);
    console.log(cal)
    let map = eventos.map(evento => {
        if (cal.assistance != null) {
            console.log("if")
            return {
                name: r,
                revenues: (cal.assistance * r.value),
                category: cal.category,
                porcentaje: (cal.assistance / cal.capacity) * 100
            };
        } else {
            console.log("else")
            return {
                name: r,
                revenues: (cal.estimate * r.value),
                category: cal.category,
                porcentaje: (cal.estimate / evento.capacity) * 100
            }
        }
    });
    console.log("nada")
    return map;
}


function mostrarHTMLxCate(col1, col2, col3, contenedor) {
    console.log(col1, col2, col3, contenedor)

    let tbodyHTML = "";
    for (let i = 0; i < 3; i++) {
        let columna1 = col1[i];
        let columna2 = col1[i];
        let columna3 = col1[i];
        tbodyHTML += `<tr>
        <td>${columna1} </td>
        <td>${columna2}</td>
        <td>${columna3}</td>
    </tr>`
    };
    contenedor.innerHTML = tbodyHTML;
}

function mostrarHTML(col1, col2, col3, contenedor) {
    let tbodyHTML = "";
    for (let i = 0; i < 3; i++) {
        let columna1 = col1[i];
        let columna2 = col2[i];
        let columna3 = col3[i];
        tbodyHTML += `<tr>
        <td>${columna1.name} | %${columna1.porcentaje}</td>
        <td>${columna2.name} | %${columna2.porcentaje}</td>
        <td>${columna3.name} | ${columna3.capacity}</td>
    </tr>`
    };
    contenedor.innerHTML = tbodyHTML;
}

function ordenarXCapacity(eventos) {
    eventos.sort((eventoA, eventoB) => {
        return eventoB.capacity - eventoA.capacity
    })
    return eventos;
}

function ordenarXPorcHigh(eventos) {
    //calcular recibe el nombre y el porcentaje
    const c = calcular(eventos);
    c.sort((a, b) => {
        if (a.porcentaje > b.porcentaje) { return -1 }
        if (a.porcentaje < b.porcentaje) { return 0 }
        return 0;
    })
    return c;
}

function ordenarXPorcLow(eventos) {
    //calcular recibe el nombre y el porcentaje
    const c = calcular(eventos);
    c.sort((a, b) => {
        if (a.porcentaje < b.porcentaje) { return -1 }
        if (a.porcentaje > b.porcentaje) { return 0 }
        return 0;
    })
    return c;
}

function calcular(eventos) {
    try {
        let calcularPorcentaje = eventos.map(evento => {
            if (evento.assistance != null) {
                return {
                    name: evento.name,
                    revenues: (evento.assistance * evento.price),
                    category: evento.category,
                    porcentaje: (evento.assistance / evento.capacity) * 100
                };
            } else {
                return {
                    name: evento.name,
                    revenues: (evento.estimate * evento.price),
                    category: evento.category,
                    porcentaje: (evento.estimate / evento.capacity) * 100
                }
            }
        });
        return calcularPorcentaje;
    } catch (error) {
        console.log(error);
    }
}

