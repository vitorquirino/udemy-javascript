//var anoDigitado = alert('aperte para saber quais anos são bicestos :');
//anoDigitado = 1004;

//while(anoDigitado <= 2024 && anoDigitado / 4){
  //  if(anoDigitado % 100 === 0 && anoDigitado % 400 !== 0){
      //  document.write(anoDigitado + 'não é' +'<br>')
     ///   anoDigitado+=4;
    //}else{
    //    document.write(anoDigitado + 'é bicesto' +'<br>')
      //  anoDigitado+=4;
  //  }
//}

var ano = 1004;
while(ano <= 2017){
    if( !(ano % 100 === 0) || (ano % 400 === 0)){
        document.write(ano + '<br>');
    }else{
        document.write(ano +'não é bicesto' + '<br>')
    }
    ano+=4;
}