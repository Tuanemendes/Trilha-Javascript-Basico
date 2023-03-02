/* 
const pessoa = {
    nome: 'Tuane',
    idade: 25,
    descrever:  function (){
        console.log(`Meu nome é  ${this.nome} e minha idade é ${this.idade}`)
    }
};
 */
/* console.log(tuane.nome);
console.log(tuane.idade);
console.log(tuane)
 */

//pessoa.altura = 1.63;

/* console.log(pessoa);
pessoa.descrever(); */
//console.log(pessoa['nome']);

class Pessoa{
    nome;
    idade;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`Meu nome é  ${this.nome} e minha idade é ${this.idade}`) 
    }
}

/* const tuane = new Pessoa();
tuane.nome = 'Tuane Mendes'
tuane.idade = 25;

console.log(tuane)
tuane.descrever();

const laura = new Pessoa('Laura',30);
laura.descrever(); */


function compararPessoas(pessoa1, pessoa2){

    if(pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa1.nome} é mais velha que ${pessoa2.nome}`);
    }else if(pessoa1.idade < pessoa2.idade){
        console.log(`${pessoa2.nome} é mais velha que ${pessoa1.nome}`);
    }else{
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`);
    }
}

const tuane = new Pessoa('Tuane', 25);
const laura = new Pessoa('Laura', 25);

compararPessoas(tuane, laura);
