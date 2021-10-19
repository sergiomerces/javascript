var lista = [];

function adicionar() {
    let entrada = document.querySelector('input#txtnum');
    let caixa = document.querySelector('select#txtsel');

    if (entrada.value.length === 0) {
        window.alert('Por favor insira os dados!');
    } else {
        
        if (entrada.value < 0 || entrada.value > 100) {
            window.alert('Digite um número válido somente entre 0 e 100!');
        } else {
            entrada = Number(entrada.value);
            lista.push(entrada);

            let item = document.createElement('option');
            item.text = `valor ${lista[0]} adicionado`;
            caixa.appendChild(item);
        }
    }
}