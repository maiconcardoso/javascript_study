/*
    setTimeout e setInterval

    Podemos com estas funções criar ações no software que 
    executam depois de um tempo ou de tempos em tempos;
    Um dos argumentos destas funções é uma callback function;
*/
console.log("Antes do setTimeout");

setTimeout(function() {
    console.log("Olá, setTimeout!");
}, 2000);

setInterval(function() {
    console.log("Olá, setInterval!");
}, 1000);
