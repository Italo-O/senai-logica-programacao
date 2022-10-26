/*Percorrer de Zero até o número de alunos

Se o número for par, escreva ‘par’ e o número correspondente

Se o número for ímpar, escreva ‘ímpar’ e o número correspondente  

Se o número for zero, escreva ‘zero’ e o número correspondente*/

let numeroDeAlunos = 10

for (let contador = 0; contador <= numeroDeAlunos; contador++){
    console.log(contador)

    if (contador == 0){
        console.log("O número atual é zero")
    }else if (contador % 2 == 0){
        console.log(`O número ${contador} é Par`)
    }else{
        console.log(`O número ${contador} é Impar`)
    }

}