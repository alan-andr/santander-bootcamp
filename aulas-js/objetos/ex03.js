class Calculadora {
    a;
    b;

    somar(a, b) {
        this.a = a;
        this.b = b;

        return `${a} + ${b} = ${a + b}`;
    }

    subtrair(a, b) {
        this.a = a;
        this.b = b;

        return `${a} - ${b} = ${a - b}`;
    }
}

let calc = new Calculadora();
let somaNum = calc.somar(5,7);
console.log(somaNum);

let subtrairNum = calc.subtrair(5,7);
console.log(subtrairNum);