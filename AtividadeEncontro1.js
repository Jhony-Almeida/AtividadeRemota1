var listaDePecas = ["Amortecedor", "Motor", "Correia dentada", "Filtro de ar", "Pneu 14"]; // Array

if(listaDePecas.length > 5){
    console.log("Não é possivel cadastrar por excesso de peças");
}else{
    console.log("limite Permitido")
}

let peso = 60;

if(peso >= 100){
    console.log("Peso permitido")
}else{
    console.log("O peso está abaixo do normal")
}

let peca = "Farol";
if (peca.length < 3){
    console.log("O nome da peça é muito pequeno")
}else{
    console.log("O nome da peça é válido")
}
