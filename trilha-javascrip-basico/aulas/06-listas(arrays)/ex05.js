/* 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as 
médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4] */


const notas = [2, 7, 3, 8, 5, 4];


function somaNotas(notas){
    let soma = 0; 
    for (let i = 0; i < notas.length; i++) {
       const nota = notas[i]
       soma += nota; 
    }
    return soma
}

console.log(somaNotas(notas));

(function mediaNotas(){
    const media = somaNotas(notas)/notas.length;
    console.log(media.toFixed(2))
    
    if(media <  5){
      console.log('recuperação');
    }
})();

