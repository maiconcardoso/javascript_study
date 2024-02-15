/*
    O Mouseover é ativado quando o ponteiro do mouse passa
    em cima do elemento que criamos o evento.
    Temos também o evento mouseout que é quando o ponteiro 
    sai do elemento.
*/

// Evento de mouseover
var title = document.querySelector("#title");
console.log(title);

title.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

// Evento de mouseout
title.addEventListener("mouseout", function() {
    this.style.backgroundColor = "white";
});

// Afetar outro elemento com mouseover

var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("mouseover", function() {
    var legenda = document.querySelector("#legenda");
    legenda.classList.remove("hide");
});

subtitle.addEventListener("mouseout", function() {
    var legenda = document.querySelector("#legenda");
    legenda.classList.add("hide");
});
