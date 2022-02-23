const dados = require('./dados.json');
const informacoesEstados = require('./faturamento.json')

const formataValor = (valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

const calculoFibonnaci = (numero) => {
    let metodoFibonnaci = [];
    metodoFibonnaci[0] = 0;
    metodoFibonnaci[1] = 1;
    for (let i = 2; i < numero; i++){
        metodoFibonnaci[i] = metodoFibonnaci[i - 2] + metodoFibonnaci[i - 1];
    }
    
    if(metodoFibonnaci.includes(numero)){
        return `O número ${numero} pertence a sequência Fibonnaci ${metodoFibonnaci}`;
    }else {
        return `O número ${numero} não pertence a sequência Fibonnaci ${metodoFibonnaci}`;
    }
}
//console.log(calculoFibonnaci(21));

const calculaFaturamentoDiario = (faturamento) => {

    const diasFaturados = faturamento.filter(faturamento => faturamento.valor != 0);

    let menorValor = diasFaturados[0];
    diasFaturados.forEach(valor => {
        if(valor.valor < menorValor.valor){
            menorValor = valor;
        }
    });

    let maiorValor = diasFaturados[0];
    diasFaturados.forEach(valor => {
        if(valor.valor > maiorValor.valor){
            maiorValor = valor;
        }
    });

    const totalFaturamento = diasFaturados.reduce((acumulador, valor) => {
        return acumulador + valor.valor;
    }, 0);

    const mediaFaturamento = totalFaturamento / diasFaturados.length;
    const faturamentoSuperior = diasFaturados.filter(faturamento => faturamento.valor > mediaFaturamento);

    return `O Menor Valor foi de: ${formataValor(menorValor.valor)}, e o Maior Valor foi de: ${formataValor(maiorValor.valor)} e o Número de Dias em que o Faturamento foi maior que a média mensal foram: ${faturamentoSuperior.length}`;
};

//console.log(calculaFaturamentoDiario(dados));

const calculaPercentual = (faturamentoMensalEstados) => {
    const totalMensal = faturamentoMensalEstados.reduce((acumulador, valor) => {
        return acumulador + valor.faturamentoMensal;
    }, 0);
    const totalPercentual = faturamentoMensalEstados.map((estado, percentual) => {
        percentual = (estado.faturamentoMensal/ totalMensal) * 100;
        return ` O Estado ${estado.estado} teve um percentual de ${Math.round(percentual)}% de representação em relação ao Valor Total`;
    })
    return totalPercentual;
}

//console.log(calculaPercentual(informacoesEstados));

const reverterString = (string) => {
    let stringInvertida = [];
    
    for(let i = string.length; i >= 0; i --) {
        if(string === undefined){
            continue;
        }else {
            stringInvertida.push(string[i]);
        }
    }
    const stringInvertidaFormatada = stringInvertida.join('').toString();
    return stringInvertidaFormatada;
};

//console.log(reverterString('Eu quero ser contratado'));