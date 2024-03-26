const form = document.querySelector('#formulario');

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log('evento previnido');
    setResultado('olá mundo');
});

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'qualquer coisa';
    resultado.appendChild(p);
}