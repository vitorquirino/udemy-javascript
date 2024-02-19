//se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
//se não, faça isso {o código}

const numero = 10;
if (numero >= 0 && numero <= 5){
    console.log('o numero está entre 0 e 5. ');
}else if (numero >= 6 && numero <= 8){
    console.log('o numero está entre 6 e 8 ');
}else if (numero >= 9 && numero <= 11){
    console.log('o numero está entre 9 e 11 ');
}else{
    console.log('o numero nao esta entre 0 e 11');
}