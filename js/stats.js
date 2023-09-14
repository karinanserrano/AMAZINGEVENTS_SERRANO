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
    let reveUp = revenues(eventosUp);
    agruparXCategorias(eventos)
    // let revePast = revenues(eventosPast);
    mostrarHTML(ordenarXHi, ordenarXLo, ordXCapa, contenedorStat);
    mostrarHTMLxCate(reveUp, reveUp, reveUp, contenedorUp)

}

function revenues(eventos) {
    let ganancias = 0;
    eventos.forEach(evento => ganancias = evento.capacity * evento.price);

    return Math.round()
}

function mostrarHTMLxCate(col1, col2, col3, contenedor) {
    console.log(col1, col2, col3, contenedor)

    let tbodyHTML = "";
    for (let i = 0; i < 3; i++) {
        let columna1 = col1[i];
        let columna2 = col2[i];
        let columna3 = col3[i];
        tbodyHTML += `<tr>
        <td>${columna1.name} </td>
        <td>${columna2.name}</td>
        <td>${columna3.name}</td>
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
                    porcentaje: (evento.assistance / evento.capacity) * 100
                };
            } else {
                return {
                    name: evento.name,
                    porcentaje: (evento.estimate / evento.capacity) * 100
                }
            }
        });
        return calcularPorcentaje;
    } catch (error) {
        console.log(error);
    }
}

function agruparXCategorias(eventos) {
    arrCategorias = filtrarXCate(eventos);
    console.log(arrCategorias)
    let newArrCategorias = [];
    for (var i = 0; i < newArrCategorias.length; i++) {
        newArrCategorias[i] = [];
    }
    /* arrCategorias.forEach(cat => {
        const nuevoArray = [cat]; // Crea un nuevo array con el nombre como primer elemento
        newArrCategorias.push(nuevoArray); // Agrega el nuevo array al arreglo de resultados
    }); */
    console.log(newArrCategorias)
    llenarArrayCategorias(eventos, arrCategorias, newArrCategorias);
    /*let agrupar = newArrCategorias.map(evento => {
        if (evento.assistance != null) {
            return {
                name: evento.name,
                porcentaje: (evento.assistance / evento.capacity) * 100
            };
        } else {
            return {
                name: evento.name,
                porcentaje: (evento.estimate / evento.capacity) * 100
            }
        }
    });
    return calcularPorcentaje;  */


}

function llenarArrayCategorias(original, categorias, vacio) {
    console.log(original, categorias, vacio)

    for (const evento of original) {
        for (const categoria of categorias) {
            if (evento.category == categoria) {
                vacio.push(evento);
            }

        }
    }

    console.log(vacio)
}




