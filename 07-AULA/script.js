
var produto1 = {
    nome : "Coca cola",
    categoria :"Bebidas",
    tamanhos : ["200ml", "Lata", "600ml", "2L"],
    quantidade : 7,
    descrição : function(){
        // O produto X é da categoria X
        console.log("O produto ", this.nome ," é da categoria", this.categoria);
    },
    verTamanhos : opcoes
};

console.log(produto1.nome)
//console.log(produto1)

produto1.descrição()

var produto2 = {
    nome : "Arroz",
    categoria :"Comida",
    tamanhos : ["1kg", "2kg", "5kg"],
    quantidade : 7,
    descrição : function(){
        // O produto X é da categoria X
        console.log("O produto ", this.nome ," é da categoria", this.categoria);
    },
    verTamanhos : opcoes
};

//Mostrar descrição com o uso do this internamente
// produto1.descrição()
// produto2.descrição()

function opcoes(){
    let tmh = "";
    // console.log("No inicio: ", tmh);
    for(index in this.tamanhos){
       // tmh = tmh + this.tamanhos[index] + ", ";
       tmh += this.tamanhos[index] + ", ";
       // console.log(tmh); 
    }
    // console.log("No Fim: ", tmh);
    console.log("As opções de tamanho são:" , tmh);  
}

produto1.verTamanhos()
produto2.verTamanhos()