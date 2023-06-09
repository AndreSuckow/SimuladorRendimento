let productPrice1 = 15;
let productPrice2 = 1.45;
let productPrice3 = 4.10;
let somaProducts = 0;

if (productPrice1 <= 20 ) {
    console.log("PRODUTO 1 COMPRADO");
    somaProducts += productPrice1;
} 

if (productPrice2 < 3) { // checa se é menor que 3
    if (productPrice2 >= 1.50) {
        console.log("PRODUTO 2 COMPRADO");
        somaProducts += productPrice2;
    } else {
    console.log("isso é golpe");
    }
}

console.log("PRODUTO 3 COMPRADO");
somaProducts += productPrice3;
console.log(`Somando os valores do produtos é: ${somaProducts}.`)

