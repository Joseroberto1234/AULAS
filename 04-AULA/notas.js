// Arrays pra guardar as informações
var alunos = []
var notasA = []
var notasB = []

// Guardar as informções vindas do usuário
function cadastro(){
for(var i = 0; i < 3; i++){
    alunos[i] = prompt("Digite o nome do aluno: ")
    notasA[i] = Number (prompt("Digite a primeira nota: "))
    notasB[i] = Number (prompt("Digite a segunda nota: "))
 }     
}

// Calcular media
function media(nota1, nota2){
    let mediaCalculada = ((nota1 * 0.4) + (nota2 * 0.6))
    return mediaCalculada
}

// Aprovado media >= 7, recuperação < 7 e >=5, reprovado media < 5, reprovado media < 5
function situação(mediaFinal){
    if(mediaFinal >=7) {
        return "Aprovado"
    } else if (mediaFinal < 7 && mediaFinal >= 5){
        return "Em recuperação"
    }
    else{
        return "Reprovado"
    }
}

// Função que mostra os resultados
function mostraResultados(){
    for(var index in alunos){
        let notaPri = notasA[index] // Pega a primeira nota e guarda, vinda do array notasA
        let notaSeg = notasB[index] // Pega a segunda nota e guarda, vinda do array notasB
        let mediaAtual = media(notaPri, notaSeg) // Manda as notass pra funcao de med
        let status = situação(mediaAtual) // Descobre a situacao de acordo com a media
        console.log("O aluno: ", alunos[index], " teve media de: ", mediaAtual);
        console.log("O status dele é de: ", status);
    }
}

cadastro()
mostraResultados()