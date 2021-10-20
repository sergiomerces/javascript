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
        res.innerHTML = null;
    } else {
        window.alert('Valor inválido ou já encontrado na lista!');
    }
    num.value = null;
    num.focus();
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Digite um valor para adicionar à lista!');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = null;
        let media = null;

        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos];
            }

            if (valores[pos] < menor) {
                menor = valores[pos];
            }

            soma += valores[pos];
            media = soma / total;
        }

        res.innerHTML = null;
        res.innerHTML += `<p>Ao <strong>total</strong> temos <strong>${total}</strong> números lançados.</p>`;
        res.innerHTML += `<p>O <strong>maior</strong> valor informado foi <strong>${maior}</strong>.</p>`;
        res.innerHTML += `<p>O <strong>menor</strong> valor informado foi <strong>${menor}</strong>.</p>`;
        res.innerHTML += `<p>A <strong>soma</strong> de todos os valores é <strong>${soma}</strong>.</p>`;
        res.innerHTML += `<p>A <strong>média</strong> dos valores digitados é <strong>${media}</strong>.</p>`;
    }
}