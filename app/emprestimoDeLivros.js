const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '151103',
    database: 'biblioteca'
};

function emprestarLivro(){
    undefined
}

module.exports = {emprestarLivro}