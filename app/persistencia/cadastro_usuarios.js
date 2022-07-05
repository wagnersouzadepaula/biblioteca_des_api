const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '151103',
    database: 'biblioteca'
};

/*INICIANDO CADASTRAR USUARIOS */

function cadastrarUsuarios(usuarios, callback){
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO usuarios (nomeusuario, senhausuario) VALUES ($1, $2) returning *";
    const values = [usuarios.nomeusuario, usuarios.senhausuario];

    cliente.query(sql, values, function(err, res){
        callback(err,res.rows[0]);
        cliente.end();
    })
}

module.exports = {cadastrarUsuarios}