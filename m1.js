function numeroAleatorio() {
    return Math.floor(Math.random()* (100 - 10 + 1)); 
};

let numero = numeroAleatorio();
console.log(numero);