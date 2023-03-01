//desafio 
// faça um programa para calcular o valor gasto de combustivel em um viagem 
// você trá 3 variaves Sendo elas:
// 1- preço do combustivel 
// 2- valor médio de gasto do carro 
// 3- Distância em Km da viagem; 
// imprima no console o vlaor que será gasto de combustivel para realizar esta viagem.

const precoCombustivel = 4.89 ;
const kmPorLitros = 11;
const distanciaKm = 200;

let litrosConsumo =  distanciaKm / kmPorLitros ;

let valorTotalGasto = precoCombustivel * litrosConsumo;

 console.log(valorTotalGasto.toFixed(2)); // toFixed para ficar apenas duas casas decimais
 