class Pessoa {
    nome;
    idade;
    profissao;
    altura;

    constructor(nome, idade, profissao, altura = null) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.altura = altura;
    }

    apresentar() {
        return `Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
    }
}

let pessoa01 = new Pessoa('João', 30, 'Engenheiro de Software')
console.log(pessoa01.apresentar());
