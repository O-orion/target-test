/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, 
na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const fs = require('fs').promises;

// Variável que contém caminho do arquivo
const CAMINHO_ARQUIVO = 'arquivos/dados.json';

// Função assíncrona para ler e processar os dados do faturamento
async function processarFaturamento() {
  try {
    const dados = await lerArquivoFaturamento(CAMINHO_ARQUIVO);
    const faturamentoMensal = calcularFaturamento(dados);
    exibirResultados(dados, faturamentoMensal);
  } catch (erro) {
    console.error(`Erro ao processar o faturamento: ${erro.message}`);
  }
}

// Função para ler o arquivo de faturamento
async function lerArquivoFaturamento(caminho) {
  const dados = await fs.readFile(caminho, 'utf-8');
  return JSON.parse(dados);
}

// Função para calcular os valores do faturamento
function calcularFaturamento(dados) {
  const valoresValidos = extrairValoresValidos(dados);

  const menorFaturamento = Math.min(...valoresValidos);
  const maiorFaturamento = Math.max(...valoresValidos);
  const mediaFaturamento = calcularMedia(valoresValidos);
  
  const diasSuperiorMedia = dados.filter(fatura => fatura.valor > mediaFaturamento);

  return {
    menorFaturamento,
    maiorFaturamento,
    mediaFaturamento,
    diasSuperiorMedia
  };
}

// Função para extrair valores válidos maiores que 0
function extrairValoresValidos(dados) {
  return dados.map(({ valor }) => valor).filter(valor => valor > 0);
}

// Função para calcular a média de faturamento
function calcularMedia(valoresValidos) {
  const soma = valoresValidos.reduce((acc, valor) => acc + valor, 0);
  return soma / valoresValidos.length;
}

// Função para exibir os resultados do processamento
function exibirResultados(dados, { menorFaturamento, maiorFaturamento, mediaFaturamento, diasSuperiorMedia }) {
  const diaMenorFaturamento = obterDiaPorValor(dados, menorFaturamento);
  const diaMaiorFaturamento = obterDiaPorValor(dados, maiorFaturamento);

  console.log(`Menor Faturamento: ${menorFaturamento}, ocorrido no dia ${diaMenorFaturamento}`);
  console.log(`Maior Faturamento: ${maiorFaturamento}, ocorrido no dia ${diaMaiorFaturamento}`);
  console.log(`Média de Faturamento: ${mediaFaturamento.toFixed(2)}`);
  console.log(`Número de dias com faturamento superior à média: ${diasSuperiorMedia.length}`);

  console.log("\nDias com Faturamento Superior à Média: \n");
  diasSuperiorMedia.forEach(({ dia, valor }) => {
    console.log(`Dia ${dia}, faturamento: ${valor}`);
  });
}

// Função para obter o dia correspondente a um valor de faturamento
function obterDiaPorValor(dados, valor) {
  const fatura = dados.find(fatura => fatura.valor === valor);
  return fatura ? fatura.dia : 'Desconhecido';
}

// Chama a função principal
processarFaturamento();
