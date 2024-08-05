var n1 = prompt('digite um numero');
n1 = parseFloat(n1);

escreve();

function escreve (){
    var output= document.querySelector('#output');
    output.innerHTML = n1;
};

function somar (){
    var n = prompt('digite outro numero');
    n = parseFloat(n);
    n1 = n1 + n;
    escreve();
}
function subtrair (){
    var n = prompt('digite outro numero');
    n = parseFloat(n);
    n1 = n1 - n;
    escreve();
}
function multiplicar (){
    var n = prompt('digite outro numero');
    n = parseFloat(n);
    n1 = n1 * n;
    escreve();
}
function dividir (){
    var n = prompt('digite outro numero');
    n = parseFloat(n);
    n1 = n1 / n;
    escreve();
}

