class Aluno {
    nome;
    notas;

    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    mediaNotas(n1, n2 , n3) {
       let soma = this.notas.reduce((total, nota) => total + nota, 0);
       let media = soma / this.notas.length;

       return `A média do aluno(a) ${this.nome} é ${media.toFixed(2)}`;   
    }
}

let aluno1 = new Aluno('Alan',[5, 6, 8]);
console.log(aluno1.mediaNotas());
