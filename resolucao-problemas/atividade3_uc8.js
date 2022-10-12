// console.log() informar o que tem dentro da variável.
// var todo mundo tem acesso, já o let é mais seguro.
// const = a constante, é usada quando não queremos mudar o resultado.
// quando numa variável temos uma lista, será adicionara com conchetes ex. ["...","...","..."].
//.length conta a quantidade de caracteres ou de variável. 
//-----------------------------------

/*Permitir o cadastro da peça somente se ela pesar mais de 100g.

Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem: lista de peças está lotada.

Validar se o nome da peça possui mais de 3 caracteres.*/


var listadePecas = ["Filtro de Ar", "Amortecedor", "Disco de Freio"]

if (listadePecas.length < 10){
    console.log("É possivel cadastrar mais peças")
} else {
    console.log("A lista esta cheia")
}

let peso = 500
if(peso<100){
 console.log("A peça precisa ter no minimo 100g")
}else{
 console.log("A peça possui peso adequado")
}

let nomePeca = "Caixa de Cambio"
if (nomePeca.length>=3){
    
    console.log("O tamanho do nome da peca esta adequado")
}else{
    console.log("O nome deve ter mais que 3 caracteres, digite um nome adequado")
}
