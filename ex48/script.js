var numero = prompt('digite um numero');
numero = parseInt(numero);

var indicie = 0;

while(indicie <= 1000){
  document.write(numero + ' x ' + indicie + ' = ' + (numero * indicie) + '<br>' );

  if(indicie % 10 === 0 && indicie > 0){
    document.write('<hr>')
  }

  indicie++;

}
document.write('saiu do loop')



//var indicie = 1001;
//do{
  //  document.write(n1 + 'x' + indicie + '=' + (n1 * indicie) + '<br>')
    //indicie = indicie + 1;
    //indicie += 1 ;
  //  indicie++;
//} while(indici <= 1000)
//document.write('saiu do loop')

