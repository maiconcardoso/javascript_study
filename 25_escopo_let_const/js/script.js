let x = 5; // declaração global
var z = 10; // declaração global 
z = 110; // Pode-se alterar
x = 12; // Pode-se alterar esta variável ao longo do código
console.log("Declaração global de x: " + x);
console.log("Declaração global de z: " + z);

const y = 10; // declaração global - valor não se altera ao longo do código
console.log("Constante global " + y);

if (true) {
    let x = 20; // declaração local
    var z = 30; // declaração local
    console.log('Declaração local de x: ' + x);
    console.log('Declaração local de z: ' + z);
}

console.log("Declaração global de x: " + x);
console.log("Diferentemente do valor declarado como let, a declaração var se altera: " + z);

if (20 > 10) {
    const y = 100; // declaração local de constante
    console.log('const if ' + y);
}


