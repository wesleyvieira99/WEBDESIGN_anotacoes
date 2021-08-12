const escola = [{
        nome:'Turma1',
        alunos: [{
            nome:'Gustavo',
            nota:8.1
        },{
            nome:'Aline',
            nota:10
        }]
    },{
        nome:'Turma2',
        alunos: [{
            nome:'Rebeca',
            nota:9
        },{
            nome:'Roberto',
            nota:5
        }]
    }]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)