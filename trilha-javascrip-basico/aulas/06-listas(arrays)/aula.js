const alunos = ['joão','maria','marina'];
alunos.push('tuane');

alunos[4] = 'junior';
alunos[1] = 'marcos';

alunos.pop(); // remove o ultimo da lista 
console.log(alunos);

console.log('-------Notas--------');
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

console.log(notas.length);

console.log('---------------');

let soma = 0; 
for(let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}
 console.log(soma);
 const media  = soma/notas.length;
 console.log(media.toFixed(2));

/* 
console.log('---------------');

const  nome = 'tuane mendes Belmiro'
for(let i = 0; i< nome.length ;i++){
    console.log(nome[i]);
}
 */

console.log('---------------');

const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);