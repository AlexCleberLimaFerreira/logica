let nome = prompt(`Qual é o seu nome? :`);
let idade = prompt(`Qual é a sua idade? :`);

if (idade >= 18) {

    let habilitado = confirm(`Você é habilitado?`);
    if (habilitado) {

    alert(`Olá ${nome} voce pode dirigir`);
    
    } 
        else {
        alert(`Olá ${nome} voce não pode dirigir`);
        }

}
 else{
    alert(`Olá ${nome} você é menor de idade`)
 }
