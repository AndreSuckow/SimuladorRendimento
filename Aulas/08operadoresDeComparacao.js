let num = 123;
let vazia;
let texto = "texto escrito";
let verdadeiro = numero > 100; // true
let falso = numero < 100; // false

console.log("número:", num, "--> tipo de variável:", typeof num);
console.log("vazia ou indefinida:", vazia, "--> tipo de variável:", typeof vazia);
console.log("texto:", texto, "--> tipo de variável:", typeof texto);
console.log("verdade:", verdadeiro, "--> tipo de variável:", typeof verdadeiro);
console.log("falso:", falso, "--> tipo de variável:", typeof falso);

// note que eu colocar adição ao invés de virgula, forma a mesma coisa, porém eu não retiro os espaços que a virgula dá, tendo que inserir eles nas strings ou isoladamente;
console.log("falso:" + falso + "--> tipo de variável:" + typeof falso);
console.log("falso: " + falso + " --> tipo de variável: " + typeof falso); // inserido espaço nas strings;
console.log("falso:" + " " + falso + "--> tipo de variável:" + typeof falso); // isoladamente;


// primeira forma:
var numero = 1;
var numero2 = 2;
var soma = numero + numero2;
console.log("Número 1 + Numero 2 é:", soma);

/* Na primeira forma, você está passando a string "Número 1 + Numero 2 é:" como o primeiro argumento e a variável soma como o segundo argumento. O console.log exibirá a string seguida pelo valor da soma. */



// Segunda forma:

/*
Na segunda forma, você está usando a concatenação de strings através do operador +. Quando você usa o operador + com strings e valores numéricos, ocorre a concatenação dos valores em uma única string.
*/

var x = 1;
var y = 2;
var resultado = x + y;
console.log(x + y + " é: " + soma);

/* Nesse caso, a expressão x + y é avaliada primeiro, resultando em 3. Em seguida, ocorre a concatenação dessa soma com as outras strings, resultando em "3 é: 3".
*/



/* A terceira forma utiliza template strings, uma funcionalidade introduzida no ECMAScript 2015 (ES6). As template strings permitem que você insira expressões e variáveis diretamente em uma string usando a sintaxe ${expressão}. Elas também suportam formatação de várias linhas.
*/

var b = 1;
var c = 2;
var result = b + c;
console.log(`${b} + ${c} é: ${result}.`);

/* Aqui, as expressões ${numero}, ${numero2} e ${soma} são inseridas diretamente na string. Quando essa string é impressa no console, os valores das variáveis são substituídos nas posições correspondentes.
*/ 

// operadores de comparação:
num = 1000; 
x = 100;
console.log(`${num} é maior que ${x}?`, num > x); // >
console.log(`${num} é menor que ${x}?`, num < x); // <
console.log(`${num} é igual que ${x}?`, num === x); // = = =
console.log(`${num} é diferente de ${x}?`, num !== x); // ! = = 
console.log(`${num} é maior ou igual a ${x}?`, num >= x); // > =
console.log(`${num} é menor ou igual a ${x}?`, num <= x); // < =
console.log(`${num} é igual a 900?`, num === 900);
console.log(`${num} é diferente de 900?`, num !== 900);