const DADOS = {
    nome: "Luco",
    idade: 25,
    morada: "Indulene A",
    cidade: "Maputo"
};

Object.entries(DADOS).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});
