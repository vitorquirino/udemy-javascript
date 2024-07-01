var jogador1 = parseFloat(prompt('digite um numero'));
var jogador2 = parseFloat(prompt('digite outro numero'));

if(jogador1 === jogador2){
    alert('voces empataram')
}else{
    var sort = parseInt( Math.random() * 2);

    if(sort === 0) {
        if(jogador1 < jogador2){
            alert('ganhador foi o jogador1');
        }else{
            alert('ganhador foi o jogador 2');
        }
    }
    else{
        if(jogador1 > jogador2){
            alert('ganhador foi o jogador 2');
        }else{
            alert('ganhador foi o jogador1');
        }
    }
}


