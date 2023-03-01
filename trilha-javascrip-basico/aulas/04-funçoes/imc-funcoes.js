function calcularImc(peso, altura){
    return peso/(Math.pow(altura,2));
}

function clasificarImc(imc){
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsesidade Grave';
    }
}

//função principal  Main

(function () {
    const peso = 75;
    const altura = 1.75;
    let imc = calcularImc(peso, altura);
    console.log('IMC '+ clasificarImc(imc));
})(); // função imediatamente invocada 



