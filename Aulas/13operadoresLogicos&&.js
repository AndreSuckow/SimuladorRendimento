// menores de 18 anos --> menor de idade (meia)
// maiores de 18 anos --> maior de idade com carteirinha (meia)
// maiores de 18 anos --> maior de idade sem carteirinha (inteira)
// maiores de 60 anos (idosos) --> idade >= 60 anos (meia)

let idadePessoa = 50;
let NaoTemCarteirinha = true;
const AdultoNaoIdoso = idadePessoa >=18 && idadePessoa < 60; // idade entre 18 e 59 anos; verdade / verdade
if (AdultoNaoIdoso && NaoTemCarteirinha) {
    console.log("INTEIRA");
} else {
    console.log("MEIA");
}
