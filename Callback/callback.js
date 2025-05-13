function verificarNumero( a , callback) {
    // Verifica se o número é maior ou igual a 10 e chama o callback com a mensagem apropriada
    
    if (a >= 10) {
      callback(`Número alto`);
      
      
    } else {
      callback(`Número baixo`);
    }
  }

  
function mensagem(text) {
    console.log(text);
  }

  
verificarNumero(9, mensagem);