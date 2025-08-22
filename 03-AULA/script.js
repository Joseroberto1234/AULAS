console.log("VAMO Q VAMO")

// LAÇOS DE REPETIÇÃO
// PARA = FOR
for(var i = 0; i < 5; i++){
    console.log("Ainda estoy ahí");   
}

console.log("Acabou de repetir");

// ENQUANTO = WHILE

var contagem = 0
while(contagem < 10){
    console.log("Estou repetindo infinitamente")
    contagem++


}
 

//ATIVIDADE

var contagem = prompt("Digite um para iniciar a contagem:")
    for(var i = 0; i < contagem; i++){
    console.log("contagem:" , i)
    
}


var senhaCorreta = "0"
var senhaCorreta = "7"
while(senha != senhaCorreta){
 
        alert("Digite a senha, Dica sua senha é depois de 1999")
}

console.log("Senha correta, Bem-Vindo(a)!");


FUNÇÕES

// Cria a função
function bemVindo(){
        var nome = prompt("Nome: ")
        console.log("Olá, ", nome)
}
// Chama a função
bemVindo()


// Função com parametros
function calcularIdade(idade){
    alert("Sua idade é: "+ idade)

}

calcularIdade(18)
calcularIdade(18)

Atividade

function maior(numero1, numero2){  
    if (numero1 > numero2){
        console.log("O primeiro numero é maior")
      }    
    else if(numero1 > numero2){
        console.log("O segundo numero é maior")
    }
    else{
        console.log("Os numeros são iguais");        
    }
    
var numero1 = prompt("Digite um numero")
var numero2 = prompt("Digite um segundo numero")

maior(number(numero1), Number(numero2)) 
}

// FUNÇÕES COM RETORNO  



function soma(valor1, valor2){
    let resultado = valor1 + valor2

    return resultado

}

var valorSomado = soma(7,6)

console.log("A soma deu: ", valorSomado)