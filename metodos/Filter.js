//O método filter() cria um novo array contendo apenas os elementos do array 
// original que satisfazem uma condição especificada

const pessoas = [
    {nome: "Alex",
    nota: 4},


    {nome: "Yoshi",
    nota: 9},


    {nome:"Mario",
    nota: 7},
];

const aprovados = pessoas.filter(pessoa => pessoas.nota);  

console.log(aprovados);
