function contar() {
    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passos = document.querySelector('input#passos');
    let res = document.querySelector('div#res');

    if(inicio.value.length === 0 || fim.value.length === 0 || passos.value.length === 0) {
        window.alert('[ERRO] Verifique os dados digitados, nenhum campo deve ficar vazio.');
        res.innerHTML = 'Impossível contar...';
    } else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passos.value);

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.');

            p = 1;
        }
        
        res.innerHTML = 'Contando: ';

        if (i < f) {
            for(i; i <= f; i += p) {
                res.innerHTML += ` ${i} \u{1f449}`;
            }
        } else {
            for(i; i >= f; i -= p) {
                res.innerHTML += `${i} \u{1f449}`;
            }
        }  

        res.innerHTML += ` \u{1f3c1}`; 
    }
}