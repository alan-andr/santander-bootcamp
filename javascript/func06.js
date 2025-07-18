function calcularIMC(peso, altura) {
    let mediaIMC = peso / (altura * altura);

    if (mediaIMC <= 18.5) {
        return 'Abaixo do peso';
    } else if (mediaIMC <= 24.9) {
        return 'Peso normal';
    } else if (mediaIMC <= 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
}

console.log("--------------------- Calculadora de IMC --------------------- ")

let resultadoIMC = calcularIMC(79, 1.80);
let imc = 79 / (1.80 * 1.80)

console.log(`\nSeu IMC: ${imc.toFixed(2)}`);
console.log(`resultado: ${resultadoIMC}!`)

console.log("\n--------------------------------------------------------------- ")