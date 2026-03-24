const jsonAlunos = `[
    { "nome": "Maria Joaquinha", "notas": [8,7.5,9], "curso": "Sistemas para Internet"}, { "nome": "João Ricardo", "notas": [8,8.5,5], "curso": "Direito"}, { "nome": "José Henrique", "notas": [4,10,7], "curso": "Administração"}, { "nome": "Pedro da Silva", "notas": [6,7.6,7.5], "curso": "Sistemas para Internet"}, { "nome": "Silvana Morais", "notas": [6,7.5,9.5], "curso": "Sistemas de Informação"}, { "nome": "Patricia Castro", "notas": [1,9,10], "curso": "Arquitetura"}, { "nome": "Joana Ribeiro", "notas": [8,9,9], "curso": "Contabilidade"}, { "nome": "Rafael Rocha", "notas": [4,4,9], "curso": "Sistemas para Internet"}, { "nome": "Gustavo Henrique", "notas": [8,7.5,5], "curso": "Sistemas para Internet"}
]`;

const dadosAlunos = JSON.parse(jsonAlunos);


function aprovados(alunos) {
    const alunos = lista [0];

    for (let i = 0; i < alunos[0].length; i++) {
        let alunoAtual = alunos[i];
        let soma = 0;

        for (let j = 0; j < alunoAtual.notas.length; j++) {
            soma += alunoAtual.notas[j];
        }

        let media = soma / alunos[0][i].notas.length;

        if (media >= 7) {
            console.log("Nome: " + alunoAtual.nome);
            console.log("Curso: " + alunoAtual.curso);
            console.log("Média: " + media);
        }
    }
}

imprimirAprovados(dadosAlunos);
