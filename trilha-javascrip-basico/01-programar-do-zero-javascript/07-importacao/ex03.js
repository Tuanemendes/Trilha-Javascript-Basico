/* 
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12 */

const {gets, print} = require('./funcoes-aux-ex03');       
const quantidadeNumeros = gets(); 
let numerosPar;  

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    if(numero % 2 === 0){
        numerosPar = numero;
        print(`Números pares ${numerosPar}`)
    }
}
