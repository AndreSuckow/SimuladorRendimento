/*
3- Luta entre categorias (Médio)


Problema
Você, desenvolvedor sênior do UFC, maior evento de artes maciais mistas (MMA) do mundo, deve desenvolver um programa que indique à organização do novo evento que sua empresa vai fazer se dois lutadores podem ou não lutar.

Os lutadores serão divididos em cinco categorias:

Peso leve: lutadores com peso mais leve que 55 kg;

Peso meio-médio:  categoria mais pesada que a anterior e com pesos mais leves que 65 kg;

peso médio: categoria mais pesada que a anterior e com pesos mais leves que 75 kg;

Peso meio-pesado: categoria mais pesada que a anterior e com pesos mais leves que 85 kg;

Peso pesado: pesos maiores ou iguais a 85 kg.

A regra do evento é: os lutadores só podem lutar com lutadores da mesma categoria.

Entrada
A entrada do seu programa será composta por duas variáveis:

peso1: variável numérica que armazena o peso de um dos lutadores;

peso2: variável numérica que armazena o peso do outro lutador.

Saída
Você deve retornar:

PODEM LUTAR: se os lutadores forem da mesma categoria;

NAO PODEM LUTAR: se os lutadores forem de categorias diferentes.

Exemplo
Entrada 1
peso1 = 60

peso2 = 64

Saída 1
PODEM LUTAR

Explicação 1
Um dos lutadores pesa 60 kg e o outro pesa 64 kg. Como ambos são da categoria dos pesos meio-médios, eles podem lutar.

Entrada 2
peso1 = 55

peso2 = 54

Saída 1
NAO PODEM LUTAR

Explicação 1
Um dos lutadores pesa 55 kg e o outro pesa 5 kg. O primeiro lutador citado é da categoria dos pesos meio-médios, o outro é da categoria dos pesos leves. Como ambos são de categorias diferentes, eles não podem lutar
*/


function solucao(peso1, peso2) {

    //leve --> até 54kg
    //meio-médio --> de 55 até 64kg
    //médio --> de 65 até 74kg
    //meio-pesado --> de 75 até 84kg
    //pesado --> de 85kg pra mais

    let peso1CategoriaLeve =  peso1 >= 0 && peso1 < 55;
    let peso2CategoriaLeve =   peso2 >= 0 && peso2 < 55;

    let peso1CategoriaMeioMedio = peso1 >= 55 && peso1 < 65;
    let peso2CategoriaMeioMedio = peso2 >= 55 && peso2 < 65;

    let peso1CategoriaMedio = peso1 >= 65 && peso1 < 75;
    let peso2CategoriaMedio = peso2 >= 65 && peso2 < 75;
    
    let peso1CategoriaMeioPesado = peso1 >= 75 && peso1 < 85;
    let peso2CategoriaMeioPesado = peso2 >= 75 && peso2 < 85;

    let peso1CategoriaPesado = peso1 >= 85;
    let peso2CategoriaPesado = peso2 >= 85;


    if (peso1CategoriaLeve === true && peso2CategoriaLeve === true) {
        console.log("PODEM LUTAR");
    } else if (peso1CategoriaMeioMedio === true && peso2CategoriaMeioMedio === true){
        console.log("PODEM LUTAR");
    } else if (peso1CategoriaMedio === true && peso2CategoriaMedio === true){
        console.log("PODEM LUTAR");
    } else if (peso1CategoriaMeioPesado === true && peso2CategoriaMeioPesado === true) {
        console.log("PODEM LUTAR");    
    } else if (peso1CategoriaPesado === true && peso2CategoriaPesado === true) {
        console.log("PODEM LUTAR");
    } else {
        console.log("Não podem lutar");
    }

}

//solucao(85, 88);



function findCategory(peso){
    let categoriaLeve =  peso >= 0 && peso < 55;
    let categoriaMeioMedio = peso >= 55 && peso < 65;
    let categoriaMedio = peso >= 65 && peso < 75;
    let categoriaMeioPesado = peso >= 75 && peso < 85;
    let categoriaPesado = peso >= 85;

    if(categoriaLeve){return "LEVE"}
    if(categoriaMeioMedio){return "MEIOMEDIO"}
    if(categoriaMedio){return "MEDIO"}
    if(categoriaMeioPesado){return "MEIOPESADO"}
    if(categoriaPesado){return "PESADO"}

}

function solucao2(peso1, peso2) {
    let categoriaPeso1 = findCategory(peso1)
    let categoriaPeso2 = findCategory(peso2)

    if(categoriaPeso1 === categoriaPeso2){
        console.log('Podem lutar')
    }else{
        console.log('Não podem lutar')
    }

}

solucao2(30, 55);