const nome = 'vitor gabriel';
const sobrenome = 'miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = ( 2024 - idade);

console.log(`${nome} ${sobrenome}  tem  ${idade}  anos,  pesa   ${peso}  kg  tem   ${alturaEmM}  de altura   e seu imc é de   ${imc}`);

console.log(` ${nome} Nasceu em ${anoNascimento} `);