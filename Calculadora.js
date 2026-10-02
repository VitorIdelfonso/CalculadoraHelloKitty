let numeroAtual = "";
let primeiroNumero = "";
let operador = "";

function digitarNumero(numero) {
    numeroAtual += numero;
    document.getElementById("visor").value = numeroAtual;
}

function escolherOperador(op) {
    primeiroNumero = numeroAtual;
    operador = op;
    document.getElementById("visor").value = op;
    numeroAtual = "";
}

function calcular() {
    let segundoNumero = numeroAtual;
    let resultado;

    switch (operador) {
        case "+":
            resultado = Number(primeiroNumero) + Number(segundoNumero);
            break;
        case "-":
            resultado = Number(primeiroNumero) - Number(segundoNumero);
            break;
        case "x":
            resultado = Number(primeiroNumero) * Number(segundoNumero);
            break;
        case "÷":
            resultado = Number(primeiroNumero) / Number(segundoNumero);
            break;
        case "%":
            resultado = (Number(primeiroNumero) * Number(segundoNumero)) / 100;
            break;
        default:
            resultado = "Erro";
    }

    document.getElementById("visor").value = resultado;
    numeroAtual = resultado;
    primeiroNumero = "";
    operador = "";
}

    function apagarTudo() {
        numeroAtual = "";
        primeiroNumero = "";
        operador = "";
        document.getElementById("visor").value = "0";
    }

    function apagarUltimo() {
        numeroAtual = numeroAtual.slice(0, -1);
        document.getElementById("visor").value = numeroAtual;
    }

