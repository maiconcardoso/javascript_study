var teste = 5;

console.log(this);

console.log(this.teste);


let pessoa = {
    nome: "Maicon",
    idade: 34,
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    dizerNome: function() {
        console.log("Olá meu nome é: " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    }
};

pessoa.dizerNome();
pessoa.aniversario();

console.log(pessoa.idade);