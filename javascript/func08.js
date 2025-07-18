function tabuada(num) {
    let contador = 1;

    while (contador <= 10) {
        console.log(`${num} x ${contador} = ${num*contador}`);
        contador++;
    }
}

console.log('---------------- Tabuada ----------------\n');

tabuada(5);

console.log('\n------------------------------------------');