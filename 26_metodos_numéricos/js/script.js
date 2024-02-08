// parseFloat

console.log(parseFloat('10.899'));
console.log(Number.parseFloat('19.99'));

// parseInt

console.log(parseInt('10'));
console.log(Number.parseInt(10.99));

// toFixed
var numero = 12.23423423.toFixed(1);
console.log(numero)
console.log(Number.isNaN(numero));

// isNaN
console.log(isNaN('teste'));
console.log("Numero 12: " + isNaN(12));
console.log(isNaN("14"));

// MAX_VALUE e MIN_VALUE

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
