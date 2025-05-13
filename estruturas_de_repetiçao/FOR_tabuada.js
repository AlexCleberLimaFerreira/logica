const numero = Number(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {           // i++ soma 1 ao valor da variavel 
    alert(`${numero} x ${i} = ${numero * i}`); // exibe a tabuada em um alerta
}
// O loop for é utilizado para repetir um bloco de código um número específico de vezes.
// Neste caso, ele está sendo usado para calcular e exibir a tabuada de um número fornecido pelo usuário.