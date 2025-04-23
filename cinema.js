// no javascript variavel se escreve "let" e não "var"              &&= "E"       ||="OU"


const readline = require("readline-sync");

let idade =  parseInt(readline.question("Qual sua idade? "));
let carteira= readline.question("Você é estudante ou idoso? (s/n) "); 

if (idade<16) {console.log("não pode entrar")}     

 else if(idade<18 || idade>=65 || carteira=="s") {
    console.log("paga meia entrada")
 }

 else{
    console.log("inteiro")
 }
