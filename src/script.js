const tagTelaConta = document.getElementById('mostra-conta');
const tagTelaOperando = document.getElementById('resultado');

function insert(num) {
    var numero = tagTelaOperando.innerHTML;

    if (numero === '0' && (num >= 0 && num < 10)) {
        tagTelaOperando.innerHTML = "" + num;
    } else if (num === '+' || num === '/' || num === '*' || num === '-') {
        tagTelaConta.innerHTML += numero + num;
        clean();
    } else if (num === '.') {
        if (!numero.includes('.')) {
            tagTelaOperando.innerHTML = numero + num;
        }
    } else {
        tagTelaOperando.innerHTML = numero + num;
    }
}

function transformaNegativo() {
    tagTelaOperando.innerHTML *= (-1);
}

function clearAll() {
    tagTelaConta.innerHTML = "";
    tagTelaOperando.innerHTML = "0";
}

function clean() {
    tagTelaOperando.innerHTML = "0";
}

function back() {
    var resultado = tagTelaOperando.innerHTML;
    if (resultado.length === 1) {
        clean();
    } else {
        tagTelaOperando.innerHTML = resultado.substring(0, resultado.length - 1);
    }
}

function calcular() {
    var operando = tagTelaOperando.innerHTML;
    var resultado = tagTelaConta.innerHTML;
    tagTelaConta.innerHTML += operando;
    resultado = tagTelaConta.innerHTML;

    if (resultado) {
        tagTelaOperando.innerHTML = eval(resultado);
    }
    else {
        tagTelaOperando.innerHTML = "Erro"
    }
}