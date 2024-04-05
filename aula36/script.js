const pessoa = {
    nome:'vitor',
    sobrenome:'quirino',
    idade:18,
    endereco:{
        rua:'Av brasil',
        numero:320
    }
};

//atribuição via desestruturação
const {nome,sobrenome, ...resto} = pessoa;
console.log(nome,sobrenome,resto);