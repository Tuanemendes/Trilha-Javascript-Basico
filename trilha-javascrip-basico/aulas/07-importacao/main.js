
//const funcoes = require('./funcoes-auxiliares');

/* console.log(funcoes);

console.log(funcoes.gets()); */

/* Dados de entrada 
5
50
10
90
98
23
saída 
98
 */


const{gets,print} = require('./funcoes-auxiliares');

/* print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
print(gets()); // não tem mais elementos na lista  */

const quantidadeAlunos = gets();

let numeroMaior = 0;
for (let i = 0; i < quantidadeAlunos; i++) {
    const numerosSorteado = gets();
    if(numerosSorteado > numeroMaior){
        numeroMaior = numerosSorteado;
    }
    
}


print(numeroMaior);



