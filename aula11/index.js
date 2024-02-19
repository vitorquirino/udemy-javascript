/*
if e else
*/

/*
if pode ser usado sozinho
*/

/*
sempre que utilizo a palavra else , preciso de um if antes 
eu posso ter vários else e ifs na checagem
só posso ter um else na checagem
podemos usar consições sem else if , utilizando apenas if e else
*/


/*
entre 0 e 11 <= - bom dia
entre 12 e 17 - boa tarde
entre 18 e 23 - boa noite
*/
const hora = 90;
if(hora >= 0 && hora <= 11){
    console.log('BOM DIA');
}
else if(hora >= 12 && hora <= 17){
    console.log('BOA TARDE');
}
else if (hora >= 18 && hora <= 23  ) {
    console.log('BOA NOITE');
}
else{
    console.log('ESSE HORARIO NAO EXISTE , TENHA UM BOM DIA')
}






/*
else{
    console.log('BOA TARDE');
}
*/