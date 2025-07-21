class Funcionario {
    nome;
    matricula;
    tempoDeEmpresa;
    funcao;

    constructor(nome, matricula, tempoDeEmpresa, funcao) {
        this.nome = nome;
        this.matricula = matricula;
        this.tempoDeEmpresa = tempoDeEmpresa;
        this.funcao = funcao;
    }

    descreverFuncionario() {
        return `O funcionário ${this.nome} de matrícula ${this.matricula}, trabalha na empresa há ${this.tempoDeEmpresa} na função de ${this.funcao}.`;
    }
};

let funcionario01 = new Funcionario ('Alan', 300075590, 2.5, 'Operador de Máquinas');

console.log(funcionario01.descreverFuncionario());