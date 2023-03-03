
const listaEntrada = [10,5,1,5,9,23,23,25,99,84,100]; // o primeiro vai indicar quantas posições qu vai chegar em quantidadeaAlunos
let i = 0;


function gets(){
    const valor = listaEntrada[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets,print};