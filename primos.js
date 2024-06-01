const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const sonPrimos = [];

 
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function imprimirPrimos(numeros) {
    const primos = numeros.filter(numero => esPrimo(numero));
    console.log("Los números primos en el array son: "+ sonPrimos);
    sonPrimos.push(primos.forEach(primo => console.log(primo)));
}

imprimirPrimos(numeros);


