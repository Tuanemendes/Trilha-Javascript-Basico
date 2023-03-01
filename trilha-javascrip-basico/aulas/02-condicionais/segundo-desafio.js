/* Faça um progrma para calcular o valor de um viagem. 
 você terá 3 variáveis. Sendo elas:

 1- Preço do etanol; 
 2- Preço da  Gasolina;
 3- O tipo de combustivel que está no seu carro;
 4- Gasto médio de cmbustivel do carro por KM;
 5- Distância em Km da viagem;

 Imprima no console o valor que será gasto para realizar esta viagem  */


const precoEtanol = 3.29;
const precoGasolina = 4.98;
const tipoCombustivelNoCarro = 'Gasolina';
const kmPorLitros = 11;
const distanciaKm = 200;

const litrosConsumido = distanciaKm / kmPorLitros;

if (tipoCombustivelNoCarro === 'Gasolina') {
    const valorTotalGasto = litrosConsumido * precoGasolina;
    console.log(valorTotalGasto.toFixed(2));
} else {
    const valorTotalGasto = litrosConsumido * precoEtanol;
    console.log(valorTotalGasto.toFixed(2));
}

