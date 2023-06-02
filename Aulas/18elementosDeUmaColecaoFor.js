// for (const elemento of colecao) { // para cada

// } 



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