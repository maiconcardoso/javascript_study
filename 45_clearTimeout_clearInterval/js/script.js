/*
    clearTimeout e clearInterval

    Podemos por um fim em setTimeout e setInterval por meio destes
    dois métodos;
    Então após determinada condição os timers não serão mais executados.
*/
var x = 0;

var myTimer = setTimeout(function(){
    console.log("x = 0");
}, 1500);

x = 5;

if (x > 0) {
    clearTimeout(myTimer);
    console.log("x = " + x);
}

// clearSetInterval 
var myInterval = setInterval(function() {
    console.log("Imprimindo interval");
}, 500);

setTimeout(function() {
    console.log("Não precisamos mais repetir");
    clearInterval(myInterval);
}, 5000);

