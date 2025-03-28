/* 2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1
 */

const { gets, print } = require('./funcoes-auxiliares-02');

const quantidadeNumeros = gets();

let maiorNumeroPar = null; 
let menorNumeroImpar = null;

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    if(numero % 2 === 0){
        if(maiorNumeroPar === null || numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }
    }else{
        if(menorNumeroImpar === null || numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
    }    
}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número ímpar: ${menorNumeroImpar}`);