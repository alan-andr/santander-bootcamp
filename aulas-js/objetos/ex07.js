class Carro {
    marca;
    modelo;
    ano;
    cor;

    constructor(marca, modelo, ano, cor = 'Indefinida') {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
}

let carro01 = new Carro('Toyota', 'Corolla', 2020);
carro01.cor = 'Preto';

console.log(`Marca: ${carro01['marca']}, Cor: ${carro01['cor']}`);
