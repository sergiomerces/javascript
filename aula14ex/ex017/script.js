function gerar() {
    let num = document.querySelector('input#num');
    let res = document.querySelector('div#res');

    if (num.value.length === 0) {
        window.alert('Digite um número válido para que possa ser exibida a tabuada!');
    } else {
        num = Number(num.value);

        for(let mult = 0; mult <= 10; mult++) {
            let pro = num * mult;
            res.innerHTML += `${num} X ${mult} = ${pro}<br>`;
        }
        res.innerHTML += '<br>Fim!<br>';
    }
}