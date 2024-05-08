//for of
const nome =['luiz', 'Otavio','henrique'];

//for (let i =0;i < nome.length; i++){
//    console.log(nome[i]);
//};
//console.log('#####')


//for( let i in nome){
//    console.log(nome[i])
//};
//console.log('#####')


for (let valor of nome){
    console.log(valor)
};

//nome.forEach(function (valor ,indice,array){
//    console.log(valor, indice, array)
//});

//for classico - geralmente com iteráveis (array ou strings)
//for in - retornar o indice ou chave (strings , arrays ou objetos) 
//for of - retornar o valor em si  (iteráveis,arrays ou strings)