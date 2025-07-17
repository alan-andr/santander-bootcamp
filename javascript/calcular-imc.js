let peso = 80;
let altura = 1.80;

let imc = peso / ( altura * altura )

if (imc < 18.5) {
    console.log("Magreza");
} else if (imc <= 24.9) {
    console.log("Normal");
} else if (imc <= 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

