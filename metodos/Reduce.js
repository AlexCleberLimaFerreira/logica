// O método reduce() executa uma função reducer (forEach) em cada elemento do array,
//  resultando em um único valor de retorno.

const notas = [7,8,6,9,5];

const media = notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;

console.log(`A média das notas é: ${media}`);
