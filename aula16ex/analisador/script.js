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
        valores.push(Number(num.value));

        let item = document.createElement('option');

        item.text = `valor ${num.value} adicionado`;
        caixa.appendChild(item);
    } else {
        window.alert('Valor inválido ou já encontrado na lista!');
    }
    num.value = null;
    num.focus();
}