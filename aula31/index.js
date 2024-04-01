//const tresHoras = 60 * 60 * 3 *1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); // 01/01/1970 timestamp unix
//const data = new Date(2024, 4); //a, m, d , h, M , s, ms


function zeroAEsquerda (numero){
    return numero >= 10 ? numero : `0${numero}`;
}

function formataDate (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora =zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataDate(data);
console.log(dataBrasil)

