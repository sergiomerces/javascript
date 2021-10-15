function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora < 6) {
        //Boa madrugada!
        img.src = 'madrugada.png';
    } else if(hora < 12) {
        //Bom dia!
        img.src = 'manha.png';
    } else if(hora <= 18) {
        //Boa tarde!
        img.src = 'tarde.png';
    } else {
        //Boa noite!
        img.src = 'noite.png';
    }
}

