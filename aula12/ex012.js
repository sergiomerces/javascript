let horaAtual = new Date;
let hora = horaAtual.getHours();

if(hora < 6) {
    console.log('Boa madrugada!');
} else if(hora < 12) {
    console.log('Bom dia!');
} else if (hora < 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
};