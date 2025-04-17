

function x(adicionar) {
    return function(adicionarNumeroPosterior) {
        return adicionar + adicionarNumeroPosterior;
    }
};

const POSTERIOR = x (10)
console.log(soma(10))