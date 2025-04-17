
function nomes(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto: `${nome} ${sobrenome}`
    };

    
}
const eu = nomes ("Luco", "Vilanculos")
console.log(eu)