/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será 
 soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um
 programa na linguagem que desejar onde, informado um número, ele calcule a sequência de
 Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência
*/

function pertenceAFibonacci(numero) {
    sequenciaFibonacci = [0,1,1];

    while(sequenciaFibonacci[sequenciaFibonacci.length -1] < numero) {
        let proximoNumero = sequenciaFibonacci[sequenciaFibonacci.length - 1] + sequenciaFibonacci[sequenciaFibonacci.length - 2];
        sequenciaFibonacci.push(proximoNumero);
    }

    let retorno = sequenciaFibonacci.includes(numero) ? `O número [${numero}] pertence a sequência fibonacci`:`O número [${numero}] não pertence a sequência fibonacci`;
    return retorno;

}

console.log(pertenceAFibonacci(35))
