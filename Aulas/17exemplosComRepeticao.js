/*
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

//console.log('demorou', meses/12, 'anos');
// console.log("rendimento anual:", rendimentoAnual)





// todo ano o rendimento CDI rende 10%;
// todo mês fazer depoósito;
// quantos meses demora para chegar R$50.000,00 (50 mil reais);


const rendimentoCDIAnual = 13.65;
const rendimentoCDIMensal = rendimentoCDIAnual / 12; //1.1375


const valorDeposito = 5000;
const objetivoFinal = 1000000;
let numeroMeses = 0;
let saldo = 0;

while (saldo < objetivoFinal) {
    let rendimento = saldo * rendimentoCDIMensal / 100
    saldo += valorDeposito + rendimento;
    numeroMeses++;
}
*/
//console.log("valor total acumulado:",saldo.toFixed(2))
// console.log("demorou", numeroMeses, "meses", "ou seja:", meses/12, "anos.");

  
function mesesParaAnos(meses, valorDeposito, objetivoFinal) {
    const rendimentoCDIAnual = 13.65;
    const rendimentoCDIMensal = rendimentoCDIAnual / 12;
  
    let numeroMeses = 0;
    let saldo = 0;
  
    while (saldo < objetivoFinal) {
      let rendimento = saldo * rendimentoCDIMensal / 100;
      saldo += valorDeposito + rendimento;
      numeroMeses++;
    }
  
    var anos = Math.floor(numeroMeses / 12);
    var mesesRestantes = numeroMeses % 12;
  
    var valorAcumulado = saldo.toFixed(2);
    var valorFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(saldo);
  
    console.log("Valor final acumulado: " + valorFormatado);
  
    return anos + " anos e " + mesesRestantes + " meses";
  }
  
  // Exemplo de uso
  var mesesTotais = 46; // Total de meses
  var valorDeposito = 5000;
  var objetivoFinal = 1000000;
  
  var resultado = mesesParaAnos(mesesTotais, valorDeposito, objetivoFinal);
  console.log(resultado); // Imprime o resultado
  
  
  
  
