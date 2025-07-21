class Pessoa {
    nome;
    idade;
    profissao;
    endereco;

    constructor(nome, idade, profissao, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.endereco = endereco;
    }

    descreverPessoa() {
        return `${this.nome} tem ${this.idade} anos de idade, e é ${this.profissao}, atualmente mora em ${this.endereco}`;
    }
}

let pessoa01 = new Pessoa ('Alan', 23, 'Operador de Máquinas II', '1a Travessa dos Ventos');

console.log(pessoa01.descreverPessoa());
