let precoProduto1 = 30;
console.log("Preço do produto é:", precoProduto1);

precoProduto1 = precoProduto1 + 1;
// precoProduto1 += 1; --> é a mesma coisa que escrever a linha acima (forma contrada)

// dando desconto a um produto:
let produtoSemDesconto = 100;
let produtoComDesconto;
console.log(produtoComDesconto);
produtoComDesconto = produtoSemDesconto * 0.8 // desconto de 20%
console.log("Produto sem desconto:", produtoSemDesconto);
console.log("Produto com desconto:", produtoComDesconto);


// dando acréscimo no valor de uma conta:
let contaDeLuzMarço = 203.40;
contaDeLuzMarço *= 1.3; // aumento de 30%;
console.log("Aumento de 30% na tarifa:", contaDeLuzMarço);
