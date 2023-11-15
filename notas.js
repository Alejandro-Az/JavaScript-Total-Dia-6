let notas = [6, 3, 10, 9, 7];

function mostrarNotas() {
    let listaNotas = document.getElementById("listaNotas");
    
    for(let nota of notas) {
        let itemLista = document.createElement("li");    
        itemLista.innerText = nota;
        listaNotas.appendChild(itemLista);
    }
}

function promedio() {
    let mostrarPromedio = document.getElementById("mostrarPromedio");
    let contador = 0;

    for(x = 0; x < notas.length; x++) {
        contador += notas[x];
    }

    let resultado = contador / 5;
    mostrarPromedio.textContent = resultado;
}

function notaAlta() {
    let mostrarNotaAlta = document.getElementById("mostrarNotaAlta");
    let contador = 0;
    let acumulador = 0;

    while(contador != notas.length) {
        if(notas[contador] > acumulador) {
            acumulador = notas[contador];
        }        
        contador++;
    }

    mostrarNotaAlta.textContent = acumulador;
}

function aplazos() {
    let aplazos = document.getElementById("aplazos");
    let contador = 0;
    let acumulador = 0;
    
    do {
        contador++;
        acumulador = notas[contador];
    } while(acumulador > 4)

    aplazos.textContent = "Sí, hay aplazos";
}