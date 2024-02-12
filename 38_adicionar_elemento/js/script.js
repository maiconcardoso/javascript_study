// criar elemento
var el = document.createElement("div");
el.classList = "div-criada";
console.log(el);

var container = document.querySelector('#container');

//inserindo elemento dentro de outro elemento
container.appendChild(el);

// novo teste
var paragrafo = document.createElement('p');
paragrafo.textContent = "Criando um elemento e inserindo informações";
el.appendChild(paragrafo);

// Inseri elemento antes de outro - insertBefore
var el2 = document.createElement('div');
el2.classList = "div-before";

var el3 = document.querySelector('#container .div-criada');
container.insertBefore(el2, el3);

