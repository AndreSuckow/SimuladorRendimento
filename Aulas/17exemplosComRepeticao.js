const deposito = 3000;
const objetivo = 100000;
const rendimentoAnual = 0.1;
const mesesAno = 12;
let conta = 0;
let meses = 0;
// todo ano o rendimento CDI rende 10%;
// todo mês fazer depoósito;
// quantos meses demora para chegar R$100.000,00 (100 mil reais);

while (conta < objetivo) {
    conta += deposito; // conta recebe o que tem na conta + deposito;
    conta += conta * rendimentoAnual / mesesAno;
    meses += 1;
}

console.log('demorou', meses/12, 'meses.');
console.log("rendimento anual:", rendimentoAnual)