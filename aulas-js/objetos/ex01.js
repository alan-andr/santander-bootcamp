class Carro {
    marca;
    modelo;
    ano;

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

let carro01 = new Carro('Ford', 'Ka', 2015);

console.log(carro01)