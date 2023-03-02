
/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de 
combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o 
preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */


class Carro{
    marca;
    cor;
    consumoMedioKm;

    constructor(marca,cor,consumoMedioKm){
        this.marca = marca;
        this.cor= cor;
        this.consumoMedioKm = consumoMedioKm;
    }

    calcularViagem(distanciaKm , precoCombustivel){
        return  distanciaKm * this.consumoMedioKm * precoCombustivel;   
    }
    
}

const carro = new Carro('Fiat','Preto',1/12);
console.log(carro);
console.log(carro.calcularViagem(200,4));

const carro2= new Carro('Fiat','vermelho',1/10);
console.log(carro2.calcularViagem(200,4));


