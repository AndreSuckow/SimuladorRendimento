// quantos números entre 1 e 1000 são múltiplos de 17

let resposta = 0;
let numero = 1;

while (numero <= 1000) {
   if (numero % 17 === 0) {
     resposta += 1;
   }
   numero += 1
}

// console.log("A resposta é:", resposta);

















// quantos números multiplos de 6 existem do numero 6 até o número 1000;
let numeroFinal = 1000;
let numeroMultiplo = 6;
let resultadoAndre = 0;

for (let index = 0; index <= numeroFinal; index++) {
  
  let resto = index % numeroMultiplo // o resto da divisão de index por numeroMultiplo recebe = resto
  if (resto === 0 && index !== 0){
    resultadoAndre += 1;
    console.log(index)
  }
  
}
console.log(`Existem ${resultadoAndre} números múltiplos de ${numeroMultiplo} até 1000.`) 


























let count = 0;
let numeroFinall = 100;

while (count <= numeroFinall) {
  let resposta2 = count++
  console.log("RESPOSTA WHILE AQUI --> ", resposta2)
}










let count2 = 100;
let numeroFinalll = 0;

while (count2 <= numeroFinall) {
  let resposta3 = count2--
  console.log("RESPOSTA WHILE AQUI --> ", resposta3)
}