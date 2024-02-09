let pessoa = {
    nome: "Maicon",
    idade: 34,
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    soma: function(a,b) {
        return a + b;
    }
};

console.log(pessoa);
console.log(pessoa.nome);
pessoa.falar();
var soma = pessoa.soma(2,2);
console.log(soma);