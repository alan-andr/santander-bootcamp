
// OBJETO LITERAL

let alan = {
    nome: 'Alan Andrade de Lima',
    idade: 23
};

console.log(alan.nome);
console.log(alan.idade);
console.log(alan)

// INCREMENTANDO UM OBJETO

alan.altura = 1.80;

console.log(alan)

// MÉTODOS EM UM OBJETO

// MÉTODO É QUANDO TEMOS UMA FUNÇÃO DENTRO DE UM OBJETO

let pessoa = {
    nome: 'Alan A.',
    idade: 23,

    saudacao: function () {
        console.log(`\nOlá, me chamo ${this.nome}! Tenho ${this.idade} anos`)
    }
};

pessoa.saudacao();

// REATRIBUINDO UM OBJETO DINAMICAMENTE

pessoa['nome'] = 'Zezito da Silva'
console.log(pessoa['nome'])