// CLASS COM CONSTRUCTOR

class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!`)
    }
}

let pessoa01 = new Pessoa('Alan Andrade', 23);

let pessoa02 = new Pessoa('Zezito Kleber', 38);

console.log(pessoa01);
console.log(pessoa02)