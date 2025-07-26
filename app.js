let secretNumber = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(element, text) {
   let elementoHTML = document.querySelector(element);
   elementoHTML.innerHTML = text;
   return; 
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === secretNumber) {
        asignarTextoElemento('p', `Acertaste el numero en ${numeroIntentos} ${numeroIntentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > secretNumber) {
            asignarTextoElemento('p', 'Numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'Numero secreto es mayor');
        }

        
        numeroIntentos++;
        limpiarCaja();

        if (numeroIntentos > 3) {
        asignarTextoElemento('p', 'Se acabaron los intentos!!'); 
        document.getElementById('reiniciar').removeAttribute('disabled');
        }
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generateSecretNumber() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // SI se sorteo todos
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se asignaron todos los numeros posibles');
    } else {
    // Si el numero generado esta incluido en la lista hacemos una operacion si no
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generateSecretNumber();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
    
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juevo del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al 100`);
    secretNumber = generateSecretNumber();
    numeroIntentos = 1;
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

