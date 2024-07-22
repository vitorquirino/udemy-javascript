var btn = document.querySelector('#refresh');
btn.addEventListener('click', () => {
    location.reload()
});

var numeroDigitado = prompt('digite um numero');
numeroDigitado = parseFloat(numeroDigitado);
for (var i = 1; i <= 1000; i++ ){t
    document.write(numeroDigitado + ' x ' + i + ' = ' + (numeroDigiado * i) + '<br>')
}
