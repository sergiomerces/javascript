function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora < 6) {
        //Boa madrugada!
        img.src = 'madrugada.png';
        document.body.style.background = 'rgb(0, 0, 0)';
    } else if(hora < 12) {
        //Bom dia!
        img.src = 'manha.png';
        document.body.style.background = 'rgb(239, 215, 181)';
    } else if(hora <= 18) {
        //Boa tarde!
        img.src = 'tarde.png';
        document.body.style.background = 'rgb(119, 151, 102)';
    } else {
        //Boa noite!
        img.src = 'noite.png';
        document.body.style.background = 'rgb(3, 71, 80)';
    }
}

