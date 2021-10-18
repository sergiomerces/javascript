function gerar() {
    let num = document.querySelector('input#num');
    let tab = document.querySelector('select#seltab');
    //let res = document.querySelector('div#res');

    if (num.value.length === 0) {
        window.alert('Digite um número válido para que possa ser exibida a tabuada!');
    } else {
        //para limpar o select caso já exista algo
        tab.innerHTML = null;

        num = Number(num.value);

        for(let mult = 0; mult <= 10; mult++) {
            let pro = num * mult;
            let  item = document.createElement('option');
            
            item.text = `${num} X ${mult} = ${pro}`;
            //vai gerar o value tab1 tab2 tab3 para o controle php
            item.value = `tab${mult}`;
            
            tab.appendChild(item);
            //res.innerHTML += `${num} X ${mult} = ${pro}<br>`;
        }
        //res.innerHTML += '<br>Fim!<br>';
    }
}