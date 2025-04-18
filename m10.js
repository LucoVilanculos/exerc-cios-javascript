function numeroAleatorio() {
    return Math.floor(Math.random()* (n1 - n2));
};

let n1 = 6;
let n2 = 1;

const RESULTADO = numeroAleatorio();
console.log(`O vencedor dessa semana é o número ${RESULTADO}`)