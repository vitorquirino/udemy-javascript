const jantar = Number(prompt('valor da janta'));
const garcom = jantar * 0.10;
const total = jantar + garcom;
alert("taxa garcom R$ " + garcom.toFixed(2)  + " \ntotal " + total.toFixed(2));