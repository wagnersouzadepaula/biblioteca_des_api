const {Client} = require('pg');

const conexao = {
    host: 'localhost', 
    port: 5433, 
    user: 'postgres',
    password: '151103',
    database: 'biblioteca'
};

function cadastrarAluno(aluno, callback){
    const cliente = new Client(conexao)
    cliente.connect();

    const sql = "INSERT INTO alunos (matriculaaluno, nomealuno, telefonealuno) VALUES ($1, $2, $3) RETURNING *";
    const values = [aluno.matriculaaluno, aluno.nomealuno, aluno.telefonealuno];

    cliente.query(sql,values,function(err, res){
        callback(err, res.rows[0]);
        cliente.end();
    })
}

//INICIANDO CADASTRAR ALUNO

module.exports = {
    cadastrarAluno
}