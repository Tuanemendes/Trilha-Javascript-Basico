/* 4) Faça um programa que preencha uma lista com 
todos os números pares contidos no intervalo de 10 a 50;
 */

const  numeros = [];

for (let i = 10; i <= 50; i++) {
    const numero = numeros.push(i);
    if(numero % 2 === 0 ){
        console.log(numero);
    }    
}