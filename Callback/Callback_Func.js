function boasVindas (nome,callback) {
    callback(nome);
}

function saudar(nome) {
    alert(`Olá, ${nome}`)
}

boasVindas(`julia`,saudar);