/* 
Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua classificação conforme a tabela abeixo 

clsssificação:
média menor que 5 , reprovação
media entre 5 e 7 , recuperação
media acima de 7 , passou de semestre
*/

const nota1 = 8;
const nota2 = 7;
const nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3
console.log(media.toFixed(2));
if (media < 5) {
    console.log('Reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação!');
} else {
    console.log('Passo de semetre!')
}
