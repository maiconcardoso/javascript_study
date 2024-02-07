
// Função sem retorno
function primeiraFuncao() {
    console.log("Hello World das funções");
}

primeiraFuncao();

// Função sem retorno mas com parâmetro
function dizerNome(nome) {
    console.log("O nome é: " + nome);
}

dizerNome("Maicon");
dizerNome("Antônio");
dizerNome("Charles");

var nomeDoBancoDados = "João";

dizerNome(nomeDoBancoDados);


// Função com retorno e parâmetros
function soma(a, b) {
    var soma = a + b;
    return soma;
}
var outraSoma = soma(3, 2);

console.log(outraSoma);





