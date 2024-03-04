/*
primitivos (imutáveis) - string , number, boolean, andefined, null (bigint, symbol) - valores copiados

Referencia (mutável) - array, objetos , function - valores passados por referencia

*/

const a = {
    nome:'luiz', 
    sobrenome:'otavio' 
};

const b = {...a};

b.nome = 'regina';
console.log(a)
console.log(b)