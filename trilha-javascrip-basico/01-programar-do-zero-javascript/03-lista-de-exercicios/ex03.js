/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando
o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento 
escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */


const descontoDebito = 'Debito';
const descontoDinheiroOrPix = 'Dinheiro'|| 'Pix';
const acimaDuasVezes = 'Acima Duas Vezes';
const precoNormal = 'Preco Normal' 

const formaDePagamento = 'Acima Duas Vezes';
let valorProduto = 6.00;
let valorFinal = 0;
if(formaDePagamento === descontoDebito){
    valorFinal = valorProduto - (10/100);
    console.log('Valor a pagar com 10% de desconto ' + valorFinal.toFixed(2));
}else if(formaDePagamento == descontoDinheiroOrPix){
    valorFinal = valorProduto - (15/100);
    console.log('Valor a pagar com 15% de desconto ' + valorFinal.toFixed(2));
}else if(formaDePagamento == acimaDuasVezes){
    valorFinal = valorProduto + (10/100);
    console.log('Valor a pagar acima de 2 vezes com 10% de juros ' + valorFinal.toFixed(2));
}else{
    valorFinal = valorProduto
    console.log('Valor a pagar dividido de até duas vezes ' + valorFinal.toFixed(2));
}
