const contar = function (maiorString) {
    return maiorString.reduce(function (maior, atual) {
        if (atual.length > maior.length) {
            return atual;
        } else {
            return maior
        }
    });
     
    
};

const nomes = ["Alberto", "João", "Isaura", "Júlia"]
const nomeMaior = contar(nomes)
console.log(nomeMaior)