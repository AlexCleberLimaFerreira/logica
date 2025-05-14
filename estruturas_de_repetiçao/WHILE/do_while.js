//estrutura while que pergunta seu nome, depois faz vc digitar 1 para dizer "olá"
// ou apertar 2 para "Sair"(encerrar a estrutura de repetição)

do {
    
    let nome = prompt("Qual seu nome:")
    opcao = Number(prompt(`
        Em que posso ajudar?
        1. Dizer olá
        2. Sair`));

        if (opcao ===1) {
            alert (`OLÁ,${nome}!`)
        }

} while (opcao !== 2);
console.log("já vai tarde.");