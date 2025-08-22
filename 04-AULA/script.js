// Vetor = Array
var alunos = ["Crisitiano", "Neymar", "Virgínia", "Bruce"]

// Mostra todos os elementos do array
console.log(alunos)

//Mostra um valor de um a posição específica do array
console.log(alunos[2])

// Troca um valor
alunos[3] = "Tiririca"


var aleatorio =  ["Roda gigante", 8, "Froagem", 1.5, 3, false, "Dougras"]

// Loop pra mostrar todods os valores do Array
for(var i = 0; i < 7; i++){
    console.log(aleatorio[i])

}

for(var i = 0; i < aleatorio.length; i++){
    console.log(aleatorio[i])
}

// Array de times
var times = ["Real Madrid", "Liverpool", "Desportiva", "Milan"]

// index = numero da caixa no array
for(var index in times){
    console.log(index); // mostrar o numero da caixinha que descobriu
    console.log(times[index]); // mostra o valor que tem dentro da caixinha   
}

//Atividades

var pessoas = ["José", "João", "Camila", "Lucas", "Pedro", "André", "Larrisa"]
console.log(pessoas);

// manipulando arrays
var frutas = ["Maça", "Uva", "Pêra"]
console.log(frutas);

// push - adiciona  um valor no fim do array
frutas.push("Mamão")
console.log(frutas)

// pop - tira o ultimo valor e retorna ele
var frutaTirada = frutas.pop()
console.log(frutaTirada);

// shift - tira o primeiro e retoma ele
var primeiraFruta = frutas.shift()
console.log(primeiraFruta);

// unshift - Adiciona um valor ou mais no inicio do array
var novaFruta = "Tomate"
frutas.unshift(novaFruta)
console.log(frutas)
