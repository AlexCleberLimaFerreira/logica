const pontuacoes = [15, 20, 8, 12];

const pontuacoes_Atualizadas = pontuacoes.map( ponto => ponto + 10 );
// Adiciona 10 a cada elemento do array pontuacoes
// O método map() cria um novo array com os resultados da chamada da função fornecida aplicada a cada elemento do array chamador.

console.log(pontuacoes_Atualizadas);      // [25, 30, 18, 22]
// O array original permanece inalterado