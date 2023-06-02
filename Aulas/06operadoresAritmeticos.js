/*
console.log(10 * 2(2 + 1) -3) // primeiro: soma-se o que tá em parênteses da esquerda pra direita --> (10 * 3 - 3) depois por ordêm de precedência (30 - 3) --> 27

console.log(10 + 20 * 3 - 4 / 3 + (12 - 4)) // primeiro parênteses (10 + 20 * 3 - 4 / 3 + 8) --> 10 + 60 - 1.33 + 8 --> 70 - 68.66 + 8 = 76.66


/*Para calcular o valor de calculoFinal, é necessário seguir a ordem de operações matemáticas. A ordem é: parênteses, potenciação, multiplicação e divisão (da esquerda para a direita) e adição e subtração (da esquerda para a direita).
*/

//Assim, temos:

let calculoFinal = 12;
calculoFinal *= 0.5 + (12*3) - 4**6 / (12/3); // calculoFinal = -11850

// primeiro calculamos o que está em parênteses da esquerda pra direita:
// --> calculoFinal *= 0.5 + (36) - 4**6 / (4);

// segundo calculamos a potência:
// --> calculoFinal *= 0.5 + (36) - 4096 / (4);

// terceiro calculamos multiplicação e divisão, da esquerda pra direita:
// --> calculoFinal *= 0.5 + (36) - 1024;

// agora calculamos adição e subtração:
// --> calculoFinal *= 36.5 - 1024; 
// --> calculoFinal *= -987.5;

// agora passamos chegamos ao final da conta:
// --> calculoFinal = 12* -987.5; // --> -11850
// --> calculoFinal = -11850;
console.log(calculoFinal)


