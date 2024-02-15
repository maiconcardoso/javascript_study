
/*
    Por meio do javascript podemos mapear algumas ações dos usuários,
    que chamamos de eventos;
    Através do movimento do mouse, click, mouse entrando ou saindo
    de um elemento, carregamentos da página e etc;
    E então criar comportamento interessante como: animação de menu
    abrindo e fechando.
*/

/* 
    --- Evento onload ---
    Ele é ativado ao carregar a página;
    podemos depois  desse envento realizar alguma ação no nosso 
    projeto.
*/

window.onload = function() {
    console.log("Carregou o DOM");
    var title2 = document.querySelector("#title");
    console.log(title2);
}

console.log("Carregou o JS");

var title = document.querySelector("#title");
console.log(title);

