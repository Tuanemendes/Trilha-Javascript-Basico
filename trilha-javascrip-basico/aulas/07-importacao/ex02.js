/* 2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90 */

const {gets, print} = require('./funcoes-aux-ex02');

const quantidadeNumeros = gets();

let maiorNumero = 0;
let menorNumero = 200; 

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    if(numero > maiorNumero){
        maiorNumero = numero
    }
    if(numero < menorNumero && numero != 0){
        menorNumero = numero
    }  
}

print(` Maior número: ${maiorNumero}`);
print(`Menor número: ${menorNumero}`);