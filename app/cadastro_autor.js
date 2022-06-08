//const Client = require('pg').Client;
const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '151103',
    database: 'biblioteca'
};

//INICIANDO CADASTRAR AUTOR 
function cadastrarAutor(autor, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO autor (nomeautor, nacionalidadeautor) VALUES ($1, $2) RETURNING *";
    const values = [autor.nomeautor, autor.nacionalidade];

    cliente.query(sql, values, 
        function (err, res){
            callback(err, res.rows[0]);
            cliente.end();
        })
}

function cadastrarlivro(autor, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO autor (nomeautor, nacionalidadeautor) VALUES ($1, $2) RETURNING *";
    const values = [autor.nomeautor, autor.nacionalidade];

    cliente.query(sql, values, 
        function (err, res){
            callback(err, res.rows[0]);
            cliente.end();
        })
}





module.exports = {
    cadastrarAutor
};

