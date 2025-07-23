let numeros = [];
let contador = 0;

while (contador <= 10) {
    numeros.push(contador);
    contador++;
}

console.log(numeros)

let contadorRegressivo = 10;

while (contadorRegressivo >= 0) {
    console.log(`${contadorRegressivo}`)
    numeros.pop(contadorRegressivo);
    contadorRegressivo--;
}

console.log(numeros);