// (condicao) ? 'valor para verdadeiro' : 'valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'pink';
const padrao = corUsuario || 'preta';
console.log(nivelUsuario,padrao);

