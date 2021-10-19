let num = document.querySelector('input#fnum');
let caixa = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if (Number(n) > 0 && Number(n) < 101) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo OK até aqui!');
    } else {
        window.alert('Valor inválido ou já encontrado na lista');
    }
}