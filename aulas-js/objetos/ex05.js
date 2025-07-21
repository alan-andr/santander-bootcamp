class Pessoa {
    nome;
    idade;
    prof;

    constructor(nome, idade, prof) {
        this.nome = nome;
        this.idade = idade;
        this.prof = prof;
    }

    descrever() {
        return `Nome: ${this.nome}, Idade: ${this.idade} anos, Profissão: ${this.prof}.`;
    }
}

let pessoa01 = new Pessoa('Claudin', 30, 'Macumbeiro');
console.log(pessoa01.descrever());