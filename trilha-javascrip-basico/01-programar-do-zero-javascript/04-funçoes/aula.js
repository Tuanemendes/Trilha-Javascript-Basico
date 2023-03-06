function teste(){
    console.log('test')
}

teste();
console.log('-------------------------');

function sayMyName(name){
    console.log('Your name is: ' + name)
}

sayMyName('Tuane');
sayMyName('Duke');
console.log('-------------------------');

function quadrado(valor){
    return valor * valor
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(10) + quadrado(10));

console.log('-------------------------');

function incremetarJuros(valor, percentualJuros){
    const valorDeacrescimo = (percentualJuros/100) * valor;
    
    return valor + valorDeacrescimo;
}

console.log(incremetarJuros(100,10));

console.log('-------------------------');




function main(){
    console.log('Programa Prinpipal ')
}

main();