class Pessoa {
    
    nome;
    idade;

    descrever() {
        console.log(`\nOlá, meu nome é ${this.nome} e tenhos ${this.idade} anos!`)
    }
}

let pessoa01 = new Pessoa();
pessoa01.nome = 'Alan';
pessoa01.idade = 25;

let pessoa02 = new Pessoa();
pessoa02.nome = 'Zezito';
pessoa02.idade = 30;


console.log(pessoa01);
console.log(pessoa02)

pessoa01.descrever();
pessoa02.descrever();