const MEUS_DADOS = [
    {
        nome: "Luco",
        sobrenome: "Isaura",
        idade: 24,
        morada: "Infulene",
        trabalho: "Desenvolvidor"
    }
];
const VERDADE = MEUS_DADOS.some((idade => idade.idade === 24 ));

console.log(VERDADE);