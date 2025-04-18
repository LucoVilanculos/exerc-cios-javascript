function impar(numerosImpares) {
    return numerosImpares.filter(num => num % 2 === 1)
}

const NUMEROS_IMPARES = [2, 3, 7, 8, 20]
console.log(impar(NUMEROS_IMPARES))