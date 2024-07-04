// ||
// && tudo tem que ser true
// !
var player1 = parseFloat(prompt('numero do player 1'));
var player2 = parseFloat(prompt('numero do player 2'));

const numeroSorteado = parseInt(Math.random() * 2);
alert('numero sorteado : ' +numeroSorteado);

if( (numeroSorteado === 0 && player1 < player2) || (numeroSorteado === 1 && player1 > player2)){
    alert('ganhador player1')
}else{
    alert('ganhador player2')
}



