// Objeto Window = janela do navegador

// console.log(window.alert("bonde do coqueiro só raul"))
// window.prompt("rarara")

//Objetivo document = código html do site

console.log(document)
console.log(document.head)
console.log(document.body)


// Acessando elementos do html
// Por tag, Clas e id

//Busca elementos pela mesma tag
var titulos = document.getElementsByTagName
("h1")

console.log(titulos)

//Busca elementos pela mesma class
var paragrafos = document.getElementsByClassName
("para")

console.log(paragrafos)

//Busca pelo elemento ID
var achado = document.getElementById("p3")

console.log(achado)

//Modificando elemento da lista de achados pela tag
titulos[1].style.color = "green"
titulos[2].style.backgroundColor = "pink"

//Modificando elemento da lista de achados pela class
paragrafos[0].style.fontsize = "45px"
paragrafos[0].style.fontweight = "bold"

//Modificando elemento achadop pelo id

//Trocando o texto do elemento
achado.innerText = "Tabua"

// Trocando o html do elemento
achado.innerHTML = "<h2>Novo texto</h2>"

//Criar uma função para ser ativada


function clique(){
    console.log("Parabéns, ganhou 1kk reais")
    console.log("Só que do banco imobiliário")
}