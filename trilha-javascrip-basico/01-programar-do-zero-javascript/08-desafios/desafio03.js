/* 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um
 funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário salário a ser transferido é calculado da seguinte maneira: 
   
   valor bruto do salário - percentual de imposto mediante a faixa salarial + 
   adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a	R$ 2500.00 = 10.00%
    Maior que 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00 */
const { gets, print } = require('./funcoes-auxiliares-03');

const salarioBruto = gets();
const valorAdicionalBeneficos = gets();

function calcularPercentual(valor, percentual) {
    return valor * percentual / 100;
}

function pergarAliquota(salario) {

    if (salario > 0 && salario <= 1100.00) {
        return 5;
    } else if (salario > 1100.01 && salario <= 2500.00) {
        return 10;
    } else {
        return 15;
    }
}
const aliquotaImposto = pergarAliquota(salarioBruto);
const valorImposto = calcularPercentual(salarioBruto,aliquotaImposto);
const valorTranferir = salarioBruto - valorImposto + valorAdicionalBeneficos;

print(valorTranferir);