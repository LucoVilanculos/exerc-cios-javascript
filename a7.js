const MEUS_DADOS = [
    {
        nome: "Luco",
        sobrenome: "Isaura",
        idade: 24,
        morada: "Infulene",
        trabalho: "Desenvolvidor"
    }
];
const VERIFICACAO = MEUS_DADOS.every((dados => dados === Number, String));

console.log(VERIFICACAO)