const verdadeiro  = true;
const falso = false;

console.log('-------condicinal simples Par ou impar----------')
const numero = 21; 

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if(numeroPar){
    console.log('Par');
}else{
    console.log('Impar')
}


console.log('-------Divisivel por 5----------')
const numero1 = 20;
const numeroDivisiveilPor5 = (numero1 % 5) === 0;

if(numero1 === 0 ){
    console.log('Número inválido!');
}else if(numeroDivisiveilPor5){
    console.log('Sim');
}else{
    console.log('Não')
}