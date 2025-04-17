
function nomes(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto: `${nome} ${sobrenome}`
    };

    
}
const EU = nomes ("Luco", "Vilanculos")
console.log(EU)