/*
1 - Camadas da atmosfera (Fácil)


Problema
Segundo o Instituto de Astronomia, Geofísica e Ciências Atmosféricas (IAG) da Universidade de São Paulo (USP), a atmosfera, camada de gás que envolve nosso planeta, é constituída de cinco camadas: troposfera, estratosfera, mesosfera, termosfera e exosfera. O ar se torna mais rarefeito ("menos ar") quanto mais distante da superfície terrestre. É por isso que os alpinistas normalmente levam oxigênio com eles quando escalam altas montanhas (começa a "faltar" ar para a respiração). A troposfera é a única camada em que os seres vivos podem respirar normalmente.

As cinco camadas, separadas pela distância da superfície da Terra são:

Troposfera: essa camada se estende até 20 km do solo;
Estratosfera: a estratosfera chega a 50 km do solo;
Mesosfera: o topo da mesosfera fica a 80 km do solo;
Termosfera: o topo da termosfera fica a  450 km acima da Terra;
Exosfera: a camada superior da atmosfera fica a  900 km acima da Terra.
Você, como funcionário da Administração Nacional da Aeronáutica e Espaço do Estados Unidos, NASA, deve criar um programa que, dada a leitura de um sensor que mostra a quantos quilômetros do solo uma nave está, indique aos astronautas em qual camada da atmosfera eles estão. Uma camada começa assim que a outra termina.

Entrada
A entrada do seu programa será composta por uma variável do tipo number chamada altitude que indica a quantos quilômetros do solo a nave está.

Saída
Seu programa deve retornar:

TROPOSFERA: caso a nave esteja na troposfera;
ESTRATOSFERA: caso a nave esteja na estratosfera;
MESOSFERA: caso a nave esteja na mesosfera;
TERMOSFERA: caso a nave esteja na termosfera;
EXOSFERA: caso a nave esteja na exosfera;
Exemplo
Entrada 1
altitude = 85

Saída 1
TERMOSFERA

Explicação 1
A termosfera começa após o quilômetro 80 e vai até o quilômetro 450.

Entrada 2
altitude = 15

Saída 2
TROPOSFERA

Explicação 2
A troposfera se estende até 20 km do solo.
*/


function solucao(altitude) {
    if (altitude <= 20) {
        // camada mais próxima do solo
        return "TROPOSFERA";
    } else if (altitude <= 50) {
        // camada entre 21km e 50km do solo
        return "ESTRATOSFERA";
    } else if (altitude <= 80) {
        // camada entre 51 e 80km do solo
        return "MESOSFERA"; 
    } else if (altitude <= 450) {
        // camada entre 81km e 450km do solo
        return "TERMOSFERA";
    } else {
        // camada superior da atmosfera
        return "EXOSFERA";
    }
}

var result = solucao(85);
console.log(solucao)

// ## ## ## ## ## ## ## ## ## ## ## ## // ## ## ## ## ## ## ## ## ## ## ## ## // ## ## ## ## ## ## ## ## ## ## ## ## // ## ## ## ## ## ## ## ## ## ## ## ## //

/*
2- Presa ou predador (Fácil)


Problema
Em uma reportagem de 2016, a revista Veja cita as principais características que indicam se um animal é presa ou predador. Uma delas, segundo a revista, é que as presas costumam ter os olhos nos lados da cabeça, o que oferece um amplo ângulo de visão.

Martin Banks, professor de óptica da Universidade de Berkeley, diz o seguinte:

“A primeira necessidade desses animais (presas) é detectar predadores. Por isso, desenvolveram uma visão panorâmica com poucos pontos cegos”.

Você foi contratado pelo grupo de pesquisadores que desenvolveram essa pesquisa para criar um programa que diga se um animal é presa ou predador.

Entrada
A entrada do seu programa é composta de uma variável do tipo booleana chamada olhosNasLaterais, que indica se o animal analisado tem ou não olhos nas laterais da cabeça. O valor de true quer dizer que o animal tem olhos nas laterais e false que não tem.

Saída
Seu programa deve retornar:

PRESA: se o animal tiver olhos nas laterais da cabeça;

PREDADOR: se não tiver olhos nas laterais da cabeça.

Exemplo
Entrada
olhosNaLateral = true

Saída
PRESA

Explicação
O animal possui olhos nas laterais da cabeça e, portanto, é uma presa.
*/

function solucao(olhosNasLaterais) {
    if (olhosNasLaterais === true) {
        return "PRESA";
    } else {
        return "PREDADOR";
    }
}

solucao(true)

// ## ## ## ## ## ## ## ## ## ## ## ## // ## ## ## ## ## ## ## ## ## ## ## ## // ## ## ## ## ## ## ## ## ## ## ## ## // ## ## ## ## ## ## ## ## ## ## ## ## //

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

