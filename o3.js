const ALUNO = {
    nome: "Kátia",
    notas: [17, 14, 20, 16],
    media: function() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
        
    }
};

console.log(ALUNO.nome, ALUNO.media())
