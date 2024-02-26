const nome = prompt('digite seu nome completo: ');
console.log(nome)
document.body.innerHTML += `seu nome é: <strong>${nome}<strong/> <br />` ;
document.body.innerHTML += `seu nome tem: <strong>${nome.length}<strong/> letras <br />` ;
document.body.innerHTML += `qual a segunda letra do seu nome: <strong>${nome[1]}<strong/> <br />` ;
document.body.innerHTML += `qual o primeiro indice da letra i no seu nome? <strong>${nome.indexOf('i')}<strong/><br />` ;
document.body.innerHTML += `qual o ultimo indice da letra i no seu nome? <strong>${nome.lastIndexOf('i')}<strong/><br />` ;
document.body.innerHTML += `as ultimas 3 letras do seu nome são? <strong>${nome.slice(-3)}<strong/><br />` ;
document.body.innerHTML += `as palavras do seu nome são? <strong/>${nome.split(" ")}<strong/><br />` ;
document.body.innerHTML += `seu nome em letras maiúsculas? <strong>${nome.toLocaleUpperCase()}<strong/><br />` ;
document.body.innerHTML += `seu nome em letras minúsculas? <strong>${nome.toLocaleLowerCase()}<strong/><br />` ;


//vitor quirino guilhem