
const entrada = [10,1,2,3,4,5,6,7,8,9,10]
let i = 0;

function gets(){
    const valor = entrada[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets,print};