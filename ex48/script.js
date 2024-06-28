var n1 = parseFloat(prompt('digite um numero')); 
var n2 = parseFloat(prompt('digite outro numero'));
const result = (n1 + n2) / 2;

if(result > 5){
    alert("sua media foi " + result + " prabens voce foi aprovado");
} else{
    alert("sua media foi " + result + " reprovado, estude mais");
}
