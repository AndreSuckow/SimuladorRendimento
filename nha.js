console.log(`Valor depósito mensal: ${valorDeposito} reais`);
console.log("Mês " + numeroMeses + ": Depósito: " + valorDeposito.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log("Valor final acumulado: " + valorAcumulado);
console.log("Valor total acumulado apenas de juros: " + valorJuros);
console.log("Valor acumulado dos depósitos: " + valorDepositosAcumulado);