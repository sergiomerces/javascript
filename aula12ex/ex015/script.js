function verificar() {
    let data = new Date();
    const ano = data.getFullYear();
    let fano = document.querySelector('input#txtano');
    let res = document.querySelector('div#res');

    if(fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] O campo Ano de Nascimento não foi  preenchido ou o ano é inválido!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = null;
        let img = document.createElement('img');

        if(fsex[0].checked) {
            genero = 'Homem';

            if(idade < 12) {
                //criança
                img.setAttribute('src', 'menino.png');
            } else if(idade < 21) {
                //adolescente
                img.setAttribute('src', 'rapaz.png');
            } else if(idade < 60) {
                //adulto
                img.setAttribute('src', 'homem.png');
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png');
            }

        } else {
            genero = 'Mulher';

            if(idade < 12) {
                //criança
                img.setAttribute('src', 'menina.png');
            } else if(idade < 21) {
                //adolescente
                img.setAttribute('src', 'moca.png');
            } else if(idade < 60) {
                //adulto
                img.setAttribute('src', 'mulher.png');
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}