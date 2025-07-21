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

let alan = new Pessoa('Alan', 23);
let rapha = new Pessoa('Raphael', 20);

function compararPessoa (p1, p2) {

    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}!`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}!`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade!`);
    };

}

compararPessoa(alan, rapha);