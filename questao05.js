/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

// Função que verifica se o argumento é uma string e a inverte
function inverterString(str) {

    // Verifica se a entrada é uma string válida
    if (typeof str !== 'string') {
      throw new Error('Por-davor, informe uma string!');
    }
  
    let resultado = '';
    
    // Interando sobre a string de trás para frente e adicionando os caracteres no resultado
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
  
    return resultado;
  }
  
const minhaString = 'Espero ser aprovado neste teste ;D';
const stringInvertida = inverterString(minhaString);

console.log(`Original: ${minhaString}`);
console.log(`Invertida: ${stringInvertida}`);

  