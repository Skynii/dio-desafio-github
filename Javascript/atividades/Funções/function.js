//Alunos aprovado com média.
const alunos =[
    {
        aluno: 'Érica',
        nota: 10,
        turma:'5B'
    },
    {
        aluno: 'Allan',
        nota: 9.5,
        turma:'1B'
    },
    {
        aluno: 'Jéssica',
        nota: 8,
        turma:'1B'
    },
    {
        aluno: 'Gabriela',
        nota: 5,
        turma:'1B'
    },
    {
        aluno: 'Bruno',
        nota: 10,
        turma:'5B'
    },
];

function alunosAprovados(array, media) {
    let aprovados = [];//array auxiliar.
  

    //Percorrer Array e popular array com alunos aprovados.
    for(let i= 0; i < array.length; i++) {
        //destructing;
        const {nota, aluno}= array[i];

        if(nota >= media  ){
            aprovados.push(aluno);            
        }
    }

    return aprovados; 
}

function alunosReprovados(array, media){
    let reprovados=[];

    for(let i=0; i<array.length; i++){
        const{nota, aluno} = array[i];

        if(nota <= media){
            reprovados.push(aluno);
        }
    }
    return reprovados;

}
console.log(alunosAprovados(alunos, 5),'Você passou!');
console.log(alunosReprovados(alunos, 5),'Você reprovou.!');