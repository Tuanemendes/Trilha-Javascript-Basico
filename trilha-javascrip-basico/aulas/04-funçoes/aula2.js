function escreverNome(nome) {
    //console.log('Meu nome é ' + nome);
    return 'Meu nome é ' + nome;
}

escreverNome('Tuane');
escreverNome('Laura');

console.log('-------Verifica Idade-------- ');

function verificarIdade(idade) {
    escreverNome('Tuane')
    if (idade >= 18) {
        console.log(escreverNome('Tuane') + '  e sou maior de idade');
    }else{
        console.log(escreverNome('Tuane') + ' e sou maenor de idade');
    }
}

verificarIdade(18);