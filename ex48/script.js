var output = document.querySelector('#output');
var mensagemTela = '';

function mostrarTabuada(){
    var n1 = prompt('digite um numero,para ver a tabuada dela');
    n1 = parseFloat(n1);
    limparTabuada();

    var indice = 1;

    while(indice <= 1000 ){
        mensagemTela += n1 + " x " + indice + " = " +(n1 * indice) + "<br>";
        indice++;

        output.innerHTML = mensagemTela;
    }
}

function limparTabuada(){
    mensagemTela ='';
    output.innerHTML = mensagemTela;

}

