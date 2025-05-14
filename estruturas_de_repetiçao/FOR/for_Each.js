const numeros = [10, 20, 30];           // array de números
let somaTotal = 0;                      //acumulador
// let i = 0;                            

numeros.forEach(numero => {     // forEach é um método que executa uma função para cada elemento do array
  somaTotal += numero;                // somaTotal = somaTotal + numero.
});

alert(`A soma total é: ${somaTotal}`);
