const condição = true;
if (condição) {
    console.log("é verdade");
} else {
    console.log("é falso");
}

console.log("acabou");


const condição2 = 3 < 2 ; // 3 é menor que 2? falso
if (condição2) {
    console.log("é verdade");
} else {
    console.log("é falso");
}

console.log("acabou");

// outro exemplo:

const valor = 5;
if (valor === 1) {
    console.log("O valor é igual a 1");
} else if (valor === 2) {
    console.log("O valor é igual a 2");
} else if (valor === 3) {
    console.log("O valor é igual a 3");
} else if (valor === 4) {
    console.log("O valor é igual a 4");
} else if (valor === 5) {
    console.log("O valor é igual a 5");
} else {
    console.log("O valor é diferente de 1 a 5");
}

console.log("acabou");

// outro exemplo:

const quantidade = 10;
if (quantidade < 1 || quantidade > 5) { // iperador lógico OR ou OU --> verifica se uma das etapas é verdadeira.
    /*
    Vamos quebrar essa linha em partes:
    valor < 1: Esta é a primeira condição. Ela verifica se o valor é menor que 1. --> false
    valor > 5: Esta é a segunda condição. Ela verifica se o valor é maior que 5. --> true --> por ser true executa essa parte do operador condicional;
    */
    console.log("Exceção: quantidade fora do intervalo esperado");
} else if (quantidade === 1) {
    console.log("O valor é igual a 1");
} else if (quantidade === 2) {
    console.log("O valor é igual a 2");
} else if (quantidade === 3) {
    console.log("O valor é igual a 3");
} else if (quantidade === 4) {
    console.log("O valor é igual a 4");
} else if (quantidade === 5) {
    console.log("O valor é igual a 5");
}

console.log("acabou");


// outro exemplo mais elaborado:

const idadeEleitor = 25;
const possuiTituloEleitor = false;

if ((idadeEleitor >= 16 && idadeEleitor <= 64) && possuiTituloEleitor) {  
  console.log("Eleitor apto para votar");
} else if (idadeEleitor >= 65) {
  console.log("Eleitor acima de 64 anos, voto facultativo");
} else {
  console.log("Eleitor não apto para votar");
}

// outro exemplo parecido:

const idade = 17;
const possuiTitulo = false;

if (idade >= 16 && idade <= 18) {
  console.log("Eleitor entre 16 e 18 anos, voto não obrigatório");
} else if ((idade >= 19 && idade <= 64) && possuiTitulo) {
  console.log("Eleitor apto para votar");
} else if (idade >= 65) {
  console.log("Eleitor acima de 64 anos, voto facultativo");
} else {
  console.log("Eleitor não apto para votar");
}
// 25
if (idadeEleitor >= 16 && idadeEleitor <= 64 && possuiTitulo || idadeEleitor > 0 || idadeEleitor === "pov"){
    

} // ao mesmo tempo



let age = 16;
if (age < 18 && age > 15 || age >= 65){
    console.log("voto opcional");
} else if (age >= 18 && age <= 64){
    console.log("voto obrigatório");
} else {
    console.log("você não tem idade para votar")
}
/*
let pessoaIdade = 16;
let temDocumento = true;
let AptoAVotar = pessoaIdade >= 16 && temDocumento 
// 
if (AptoAVotar){
    console.log('Você pode votar')
} else {
    console.log("Você ainda não tem idade");
}
*/


function votar(pessoaIdade, temDocumento){
    let AptoAVotar = pessoaIdade >= 16 && temDocumento 

    if (!AptoAVotar){
        console.log('Você não pode votar')
        return;
    }

    //efetuar o voto
    
    console.log('Você pode votar')
    //...

    return;
}
votar(16, true);


let pessoaIdade = 16;
let temDocumento = true;
let AptoAVotar = pessoaIdade >= 16 && temDocumento 



if (AptoAVotar){
    console.log('Você pode votar')
}else{
    console.log('Você não pode votar')
}

let somaDosValores = 1;



