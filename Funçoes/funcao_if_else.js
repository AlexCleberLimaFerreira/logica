// função que verrifica a idade, se a idade for maior ou igual a 18 será imprimido "true", 
// se ñ será imprimido "false"

function verificar_idade(idade) {

    if (idade>=18) {
        return true;
    }

    else{return false;}
}

console.log(verificar_idade(20));