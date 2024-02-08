// toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";
var fraseEmCaixaAlta = frase.toUpperCase();
console.log(fraseEmCaixaAlta);

console.log(fraseEmCaixaAlta.toLowerCase());

// trim
var nome = "                 Maicon          ";
var nomeTrim = nome.trim();
console.log(nome);
console.log(nomeTrim);


// split
console.log(frase.split(" "));

var tags = "PHP, Javascript, HTML, CSS ";
console.log(tags.split(", "));


// lastIndexOf
var fraseDois = "Eu quero a última palavra teste desta frase de teste";
console.log(fraseDois.lastIndexOf("teste"));
