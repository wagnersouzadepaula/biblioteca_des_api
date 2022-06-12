const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '151103',
    database: 'biblioteca'
};

function emprestarLivro(emprestimoDeLivros, callback){
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO emprestimos (idlivro, idaluno, dataemprestimo, idusuario) VALUES ($1, $2, $3, $4) RETURNING *"
    const values = [emprestimoDeLivros.idlivro, emprestimoDeLivros.idaluno, emprestimoDeLivros.dataemprestimo, emprestimoDeLivros.idusuario];

    cliente.query(sql, values, function(err, res){
        callback(err, res.rows[0]);
        cliente.end();
    })
}

module.exports = {emprestarLivro}

