

function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto/100));
}

function aplicarJuros(valor, juros){
    return valor + (valor *(juros /100));
}


const formaDePagamento = 4;
let valorProduto = 100.00;
let valorFinal = 0;

if(formaDePagamento === 1){
    console.log('Valor a pagar com 10% de desconto ' + aplicarDesconto(valorProduto,10).toFixed(2));
}else if(formaDePagamento === 2){
    console.log('Valor a pagar com 15% de desconto ' + aplicarDesconto(valorProduto,15).toFixed(2));
}else if(formaDePagamento ===3){
    console.log('Valor a pagar dividido de até duas vezes ' + valorProduto.toFixed(2));
}else{
    console.log('Valor a pagar acima de 2 vezes com 10% de juros ' + aplicarJuros(valorProduto,10).toFixed(2));
}
