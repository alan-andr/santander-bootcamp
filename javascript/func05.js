function classificadorIdade(idade) {

    if (idade <= 0) {
        return 'Idade inválida';
    } 

    if (idade <= 12) {
        return 'Criança';
    } else if (idade <= 17) {
        return 'Adolescente';
    } else if (idade <= 59) {
        return 'Adulto';
    } else if (idade < 120) {
        return 'Idoso'
    } 
}

let resultadoIdade = classificadorIdade(-1);
console.log(`Você é ${resultadoIdade}`);