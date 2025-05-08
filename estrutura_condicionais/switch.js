//A estrutura básica do switch em JavaScript é usada para executar diferentes blocos de código 
// com base no valor de uma expressão. Ela é útil quando se quer comparar uma variável contra múltiplos valores possíveis.

let dia = 3;
let nomeDoDia;

switch (dia) {
  case 1:
    nomeDoDia = "Domingo";
    break;
  case 2:
    nomeDoDia = "Segunda-feira";
    break;
  case 3:
    nomeDoDia = "Terça-feira";
    break;
  case 4:
    nomeDoDia = "Quarta-feira";
    break;
  default:
    nomeDoDia = "Dia inválido";
}

console.log(nomeDoDia); // Saída: Terça-feira



