// comentário de uma linha só

/*
comenta
varias
linhas
*/

//console.log = escreva do portugol
console.log("Jesus Te Ama") // tá comentado

// Cria uma de alerta na página
//alert("TESTA AÍ VAI Q DÁ BOM")

// VAR cria uma váriavel na tela
var nome = "Guloso"
console.log("O nome é:" + nome)

// Cadeia =  String

var texto = "Santos"
console.log( typeof(texto) )

// inteiro = number, int

var numero = 1989
console.log( typeof(numero) )

// real = number, float

var quebrado = 1.9
console.log( typeof(quebrado) )

// lógico = bool

var VouF = true
console.log( typeof(VouF) )

// 

var nulo = null
console.log( typeof(nulo) )

// Valor nulo

var indefinido = undefined
console.log( typeof(indefinido) )

// Váriavel sem valor iniciado

// Operadores aritiméticos
// +,-,*,/, %

var a = 10
var b = 3

var soma = a+b
console.log( "O resultado é:" +soma)

var subtração = a-b
console.log( "O resultado é:" +subtração)

var multiplicação = a*b
console.log("O resultado é:" +multiplicação )

var divisão = a/b
console.log( "O resultado é:" +divisão)

var porcentagem = a % b
console.log( "O resultado é:" +porcentagem)


// Operadores lógicos
// e, ou, nao
// &&, ||, ! = not

var verdade = true 
var mentira = false

// Comparação com E
console.log( verdade && mentira)

// Comparação com OU
console.log( verdade || mentira)

//Comparação com negação
console.log( verdade && !mentira)

//Operadore Relacionais
// >, <, >=, <=, ==, !=, ===, !=

var a = 10
var b = 3
var c = "7"


console.log( a > b );
console.log( b > a );
console.log( b >= a );
console.log( b <= a );
console.log( b == a );
console.log( b != a );

console.log(a == c); //Compara só valor
console.log(a === c); //Compara valor e tipo
console.log(a !== c); //Compara valor e tipo


// Interação com usuário via comando prompt
var numero = prompt("Digite um número:")
var numero2 = prompt("Digite um outro número:")


var resultado = Number(numero) + Number(numero2) 


console.log("O resultado é:", resultado)

alert("O resultado é:" + resultado)








