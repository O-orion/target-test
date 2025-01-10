/**
 * 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação
 que cada estado teve dentro do valor total mensal da distribuidora. 
 */

// Dados de faturamento por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  // Função para calcular o faturamento total
  function calcularFaturamentoTotal(faturamentoPorEstado) {
    return Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
  }
  
  // Função para calcular os percentuais de faturamento por estado
  function calcularPercentuaisDeFaturamento(faturamentoPorEstado) {
    const faturamentoTotal = calcularFaturamentoTotal(faturamentoPorEstado);
  
    return Object.entries(faturamentoPorEstado).map(([estado, valor]) => {
      const percentual = (valor / faturamentoTotal) * 100;
      return {
        estado,
        percentual: percentual.toFixed(2) + '%',
      };
    });
  }
  
  // Função para exibir os percentuais de faturamento
  function exibirPercentuais(faturamentoPorEstado) {
    const percentuais = calcularPercentuaisDeFaturamento(faturamentoPorEstado);
  
    console.log('Percentual de Faturamento por Estado:');
    percentuais.forEach(({ estado, percentual }) => {
      console.log(`Estado: ${estado}, Percentual: ${percentual}`);
    });
  }
  
  // Executa a exibição dos percentuais
  exibirPercentuais(faturamentoPorEstado);