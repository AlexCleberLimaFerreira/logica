// enquanto a senha for diferente de 1234 será imprimido na tela "senha inválida" .
// o while será interrompido quando a senha certa for digitada

let senha = Number(prompt(`Digite senha de 4 digitos`));

while(senha !== 1234) {
    let senha = Number(prompt(`senha inaválida, tente novamente.`));
}

console.log(`Acesso permitido`);