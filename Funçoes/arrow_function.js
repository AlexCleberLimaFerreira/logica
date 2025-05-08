// função arrow function q identifica se o numero
// é par ou é ímpar

let numero = 3

const verificar = numero => numero % 2  === 0

if(numero % 2 === 0) {            // =
    console.log("PAR")            // == compara o valor
}                                 // === compara o valor e o tipo
else if(numero % 2 === 1) {     // != diferente de ...
    console.log("ÍMPAR")          // !== estritamente diferente de ...
}                                 // <, >, <=, >=, ==, !=, ===, !==


else{console.log("ÍMPAR")}


//arrow function e if else(com operadores ternários)
//mesma operação de cima

const verificar2 = (numero) => {
 numero % 2 === 0 ? "Par" : "Impar";
}

console.log(verificar2(3));