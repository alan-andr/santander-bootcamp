let notas = [];

notas.push(5);
notas.push(7);
notas.push(9)
notas.push(2)
notas.push(5)

let soma = 0;

for (let contador = 0; contador < notas.length; contador++) {
    console.log(notas[contador]);
    let nota = notas[contador];
    soma = soma + nota;
}

let media = soma / 5;

console.log(`\nA soma dos números é ${soma}, a média entre eles é ${media}`);

