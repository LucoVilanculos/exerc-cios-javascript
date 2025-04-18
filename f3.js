const CONTAR = function (maiorString) {
    return maiorString.reduce(function (maior, atual) {
        if (atual.length > maior.length) {
            return atual;
        } else {
            return maior
        }
    });
     
    
};

const NOMES = ["Alberto", "João", "Isaura", "Júlia"]
const NOME_MAIOR = CONTAR(NOMES)
console.log(NOME_MAIOR)