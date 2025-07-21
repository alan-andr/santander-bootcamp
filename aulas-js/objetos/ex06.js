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

let carro01 = new Carro('Toyota', 'Corolla', 2020);
console.log(`Marca: ${carro01['marca']}`);