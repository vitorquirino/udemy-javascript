const numero = Number(prompt('digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const secText= document.getElementById('texto');

numeroTitulo.innerHTML = numero;

secText.innerHTML = '';
secText.innerHTML +=`<p> <strong>raiz quadrada<strong/>: ${Math.sqrt(numero)}</p>`;
secText.innerHTML  +=`<p> ${numero} <strong>é inteiro:</strong> ${Number.isInteger(numero)}`;
secText.innerHTML  += `<p> <strong>é NaN:</strong> ${isNaN(numero)}`;
secText.innerHTML  += `<p> <strong>Arredondando para baixo:</strong> ${Math.floor(numero)}`;
secText.innerHTML  += `<p> <strong>Arredondando para cima:</strong> ${Math.ceil(numero)}`;
secText.innerHTML  += `<p> <strong>Arredondando para cima:</strong> ${numero.toFixed(2)}`;




//55.1987555