console.log("OI")

// Com array

var alunos = ["Pedro","Tiago","João"]
var media = ["Pedro","Tiago","João"]

console.log("O aluno: ", alunos[1], "teve media: ", media[1])


// Com objeto

var estudante = {
    nome : "Cristiano",
    nota1 : 8,
    nota2 : 9,
    media : 8.5
}

console.log(estudante.nome, estudante.media, estudante.nota1, estudante.nota2)

var lapis = {
    cor : "preto",
    tamanho : "A3",
    funcao : "escrever",
    grafite : 2.0
}

console.log(lapis.cor,"-",lapis.funcao)


//Outra forma de acessar propriedade
console.log("Cor:", lapis["cor"])


//Crianado um objeto vazio
var garrafa = {}
console.log(garrafa)

//Adicionando novas propriedades
//em um objeto já existente
garrafa.preco = 400
garrafa.cor = "Amarelo"
garrafa.tamanho = 2.5
garrafa["validade"] = "1 ano"

console.log(garrafa)

//Alternando o valor de uma propriedade
// que já existe
garrafa.preco = 390
garrafa["validade"] = "2 anos"
console.log(garrafa)

//Criar uma nova propriedade
var novaPropriedade = "apelido"
garrafa[novaPropriedade] = "cocofanto elefanto"
console.log(garrafa.apelido)



// Criar funções
var animal = {
    nome: "tripi tropi tropi tripa",
    especie: "morango do amor",
    raca: "bobigudis",
   //Função = Metodo
    andar: function(){
         console.log("Estou andando")
    
 },
      latir: function(){
        console.log("Esta latindo")
        
     }
}


console.log("O nome é: ", animal.nome)

animal.andar()
animal.latir()
