var output = document.querySelector('#output');
var mensagem = '';


function mostrarTabuada() {
    var n1 = prompt("digite um numero");
    n1 = parseFloat(n1);
    limparTabuada();

    var indice = 1;

    while(indice <= 1000){
        mensagem += n1 + ' x ' + indice + ' = ' + (n1 * indice) + '<br>';
        indice++;
    }
    output.innerHTML = mensagem;

};
function limparTabuada (){
    mensagem = ''
    output.innerHTML = mensagem
};

