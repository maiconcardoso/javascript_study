/*
    O click é ativado quando o usuário clica em um evento em 
    que atrelamos o evento.
    Após a ação podemos fazer as moficações e alterações no HTML/CSS.
*/

// Evento click
var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function() {
    console.log("Mamãe passou açucar em mim");
    console.log(this);
    this.style.cssText = "color: red; background-color: blue;";
});

// Evento click afetando outros elementos
var title = document.querySelector("#title");
title.addEventListener("click", function() {
    console.log("teste");
    var subtitle = document.querySelector(".subtitle");
    subtitle.style.display = "none";
    this.style.color = "purple";
});

// double click
var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("dblclick", function() {
    console.log("Click Duplo");
});