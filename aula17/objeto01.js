let crianca = {
    nome: 'José',
    idade: 4,
    sexo: 'masculino',
    altura: 1.10,
    peso: 20,
    //cria uma propriedade que serve como uma variável que armazena função
    crescer(h){
        console.log('Cresceu:');
        //uso do this porque se refere ao próprio objeto
        this.altura += h;
    }
}

console.log(`${crianca.nome} tem ${crianca.idade} anos e ${crianca.peso} kg e altura de ${crianca.altura} m.`);

//a função é chamada como uma propriedade do objeto e o valor é passado como parâmetro para h
crianca.crescer(0.15);

console.log(`${crianca.altura}`);