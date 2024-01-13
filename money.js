/*

// dado de entrada: anos de investimento e valor depósito 
function calcularTempoEValor(anos, valorDeposito) {
    const rendimentoCDIAnual = 13.65;
    const rendimentoCDIMensal = rendimentoCDIAnual / 12;
  
    let numeroMeses = anos * 12;
    let saldo = 0;
  
    for (let i = 1; i <= numeroMeses; i++) {
      let rendimento = saldo * rendimentoCDIMensal / 100;
      saldo += valorDeposito + rendimento;
    }
  
    var valorFormatado = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    var dias = Math.floor(numeroMeses * 30);
    var meses = Math.floor(numeroMeses);
    var anosCompletos = Math.floor(numeroMeses / 12);
  
    console.log("Tempo necessário para acumular o valor desejado:");
    console.log("Dias: " + dias);
    console.log("Meses: " + meses);
    console.log("Anos: " + anosCompletos);
    console.log("Valor final acumulado: " + valorFormatado);
  }
  
  // Exemplo de uso
  var anosDesejados = 5;
  var valorDeposito = 1000000;
  
  calcularTempoEValor(anosDesejados, valorDeposito);


  */

// dado de entrada: valor entrada mensal, até que objetivo final seja cumprido.

function mesesParaAnos(meses, valorDeposito, objetivoFinal) {
  const rendimentoCDIAnual = 13.65;
  const rendimentoCDIMensal = rendimentoCDIAnual / 12;

  let numeroMeses = 0;
  let saldo = 0;
  let totalDepositos = 0;

  while (saldo < objetivoFinal) {
    let rendimento = (saldo * rendimentoCDIMensal) / 100;
    saldo += valorDeposito + rendimento;
    numeroMeses++;
    totalDepositos += valorDeposito;

    // Valor do depósito e valor acumulado apenas pelos juros
    console.log(
      "Mês " +
        numeroMeses +
        ": Depósito: " +
        valorDeposito.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) +
        ", Rendimento: " +
        rendimento.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
    );
  }

  var anos = Math.floor(numeroMeses / 12);
  var mesesRestantes = numeroMeses % 12;

  var valorAcumulado = saldo.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  var valorJuros = (saldo - totalDepositos).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  var valorDepositosAcumulado = totalDepositos.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  console.log(
    "%cValor acumulado dos depósitos: " + valorDepositosAcumulado,
    "color: red"
  );
  console.log(
    "%cValor total acumulado apenas de juros: " + valorJuros,
    "color: blue"
  );
  console.log("%cValor final acumulado: " + valorAcumulado, "color: green");

  return "tempo estimado: " + anos + " anos e " + mesesRestantes + " meses";
}

// Exemplo de uso
var mesesTotais = 36; // Total de meses
var valorDeposito = 100000;
var objetivoFinal = 10000000;

var resultado = mesesParaAnos(mesesTotais, valorDeposito, objetivoFinal);
console.log(resultado); // Imprime o resultado
