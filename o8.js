function dados() {
   return {...PESSOA, ...REFERENCIA};
};

const PESSOA = {
    nome: "Luco",
    sobrenome: "Isaura",
    apelido: "Vilanculos"
};

const REFERENCIA = {
    idade: 25,
    morada: "Indulene A",
    cidade: "Maputo"
}

const FUSAO = dados(PESSOA, REFERENCIA)
console.log(FUSAO)