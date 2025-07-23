let numeros = [0,1,2,3,4,5,6,7,8,9,10];
let numero = 0;

for (let contador = 0; contador < numeros.length; contador++) {
    numero = numeros[contador];
    
    if (numero % 2 === 0) {
        console.log("Pares: " + numero);
    };
} 