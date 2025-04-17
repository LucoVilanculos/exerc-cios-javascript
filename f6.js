function pares(numerosPares) {
    return numerosPares.filter(num => num % 2 === 0)
};

const numeros = [5, 7, 10, 4, 8, 2]
console.log(pares(numeros))