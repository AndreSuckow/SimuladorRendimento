// for (const elemento of colecao) { // para cada

// } 


/*
const palavra = "André Luis Suckow";
let numeroDeVogais = 0;

for (const letra of palavra) {
    if (letra === "a" || letra === "A") {numeroDeVogais += 1;} 
    if (letra === "e" || letra === "é") {numeroDeVogais += 1;}
    if (letra === "i") {numeroDeVogais += 1;}
    if (letra === "o") {numeroDeVogais += 1;}
    if (letra === "u") {numeroDeVogais += 1;}
    console.log("O numero de vogais é:", numeroDeVogais)
    console.log(letra);
}
*/



// quantas vogais existe na string?
let numeroDeVogaisBoladas = 0;


const StringBolada = `Conta-se que por volta do ano 250 A.C, na China antiga, um príncipe da região norte do país, estava às vésperas de ser coroado imperador, mas, de acordo com a lei, ele deveria se casar. Sabendo disso, ele resolveu fazer uma “disputa” entre as moças da corte ou quem quer que se achasse digna de sua proposta.-
No dia seguinte, o príncipe anunciou que receberia, numa celebração especial, todas as pretendentes e lançaria um desafio. Uma velha senhora, serva do palácio há muitos anos, ouvindo os comentários sobre os preparativos, sentiu uma leve tristeza, pois sabia que sua jovem filha nutria um sentimento de profundo amor pelo príncipe.

Ao chegar em casa e relatar o fato a jovem, espantou-se ao saber que ela pretendia ir à celebração, e indagou incrédula:

Minha filha, o que você fará lá? Estarão presentes todas as mais belas e ricas moças da corte. Tire esta ideia insensata da cabeça; eu sei que você deve estar sofrendo, mas não torne o sofrimento uma loucura.

E a filha respondeu:

Não, querida mãe, não estou sofrendo e muito menos louca, eu sei que jamais poderei ser a escolhida, mas é minha oportunidade de ficar pelo menos alguns momentos perto do príncipe, isto já me torna feliz.

À noite, a jovem chegou ao palácio. Lá estavam, de fato, todas as mais belas moças, com as mais belas roupas, com as mais belas joias e com as mais determinadas intenções. Então, inicialmente, o príncipe anunciou o desafio:

Darei a cada uma de vocês, uma semente. Aquela que, dentro de seis meses, me trouxer a mais bela flor, será escolhida minha esposa e futura imperatriz da China.

A proposta do príncipe não fugiu as profundas tradições daquele povo, que valorizava muito a especialidade de “cultivar” algo, sejam costumes, amizades, relacionamentos, etc… O tempo passou e a doce jovem, como não tinha muita habilidade nas artes da jardinagem, cuidava com muita paciência e ternura a sua semente, pois sabia que se a beleza da flor surgisse na mesma extensão de seu amor, ela não precisava se preocupar com o resultado. Passaram-se três meses e nada surgiu. A jovem tudo tentara, usara de todos os métodos que conhecia, mas nada havia nascido.

Dia após dia ela percebia cada vez mais longe o seu sonho, mas cada vez mais profundo o seu amor. Por fim, os seis meses haviam passado e nada havia brotado. Consciente do seu esforço e dedicação a moça comunicou a sua mãe que, independente das circunstâncias retornaria ao palácio, na data e hora combinadas, pois não pretendia nada além de mais alguns momentos na companhia do príncipe. Na hora marcada estava lá, com seu vaso vazio, bem como todas as outras pretendentes, cada uma com uma flor mais bela do que a outra, das mais variadas formas e cores. Ela estava admirada, nunca havia presenciado tão bela cena.

Finalmente chega o momento esperado e o príncipe observa cada uma das pretendentes com muito cuidado e atenção. Após passar por todas, uma a uma, ele anuncia o resultado e indica a bela jovem como sua futura esposa. As pessoas presentes tiveram as mais inesperadas reações. Ninguém compreendeu porque ele havia escolhido justamente aquela que nada havia cultivado. Então, calmamente o príncipe esclareceu:

Esta foi a única que cultivou a flor que a tornou digna de se tornar uma imperatriz. A flor da honestidade, pois todas as sementes que entreguei eram estéreis.

Se para vencer, estiver em jogo a sua honestidade, perca. Você será sempre um Vencedor!`; 
for (const letra of StringBolada) {
    if (letra === "a" || letra === "A") {
        numeroDeVogaisBoladas += 1;
    }
    if (letra === "e" || letra === "E") {
        numeroDeVogaisBoladas += 1;
    }
    if (letra === "i" || letra === "I") {
        numeroDeVogaisBoladas += 1;
    }
    if (letra === "o" || letra === "O") {
        numeroDeVogaisBoladas += 1;
    }
    if (letra === "u" || letra === "U") {
        numeroDeVogaisBoladas += 1;
    }
}
console.log(numeroDeVogaisBoladas)
