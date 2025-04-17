
function maiordeIdade(maior) {
    return maior.reduce(function (maisVelho, atual) {
        if (atual.length > maisVelho.length) {
            return atual;
        } else {
            return maisVelho
        }
    });
     
    
};
const PESSOAS = [
    {name: "Luco",
      age: 24  
    },
    {
        name: "Kátia",
        age: 20
    }
]
console.log(maiordeIdade(PESSOAS))