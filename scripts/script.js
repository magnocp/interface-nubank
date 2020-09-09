const seta = document.querySelector(".header div + img");
const opcoes = document.querySelector("#opcoes");
const saldo = document.querySelector(".saldo div");
const vizualizar = document.querySelector(".right img");

var saldoDisponivel = 0; 

function mostrarOpcoes(){
    if(opcoes.style.display === "none" || opcoes.style.display === ""){
        opcoes.style.display = "flex";        
        seta.src = "imagens/arrowUp.png";
    }else{
        opcoes.style.display = "none";
        seta.src = "imagens/arrowDown.png";
    }
}


function mostrarSaldo(){
    if( saldo.style.backgroundColor === "rgb(228, 228, 228)" 
        || saldo.style.backgroundColor === ""        
    ){
        saldo.style.backgroundColor = "rgb(255, 255, 255)";
        saldo.innerHTML = `R$ ${saldoDisponivel.toFixed(2).replace('.', ",")}`;    
        vizualizar.src = "imagens/linha/invisivel.png";       
    }else{
        saldo.style.backgroundColor = "rgb(228, 228, 228)";
        saldo.innerHTML = "";
        vizualizar.src = "imagens/linha/visivel.png";
    }
}