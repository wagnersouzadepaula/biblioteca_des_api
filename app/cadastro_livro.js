const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '151103',
    database: 'biblioteca'
};

/*INICIANDO CADASTRAR LIVRO */

function cadastrarLivro(livro, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO livros (isbnlivro, titulolivro, idautor, editoralivro, anolivro, qtdelivrodisponivel) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [livro.isbnlivro, livro.titulolivro, livro.idautor, livro.editoralivro, livro.anolivro, livro.qtdelivrodisponivel];

    cliente.query(sql, values, 
        function (err, res){
            callback(err, res.rows[0]);
            cliente.end();
        })
}


/*INICIANDO CONSULTAR DISPONIBILIDADE DE LIVRO*/

function pesquisarDisponibilidade(id, callback){
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "SELECT qtdelivrodisponivel FROM livros WHERE idlivro = $1";
    const values = [id];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let qtdeDisponivel = res.rows;
                return qtdeDisponivel; 
            }
            else {
                const error = "Produto nao encontrado";
                callback(error, undefined);
            }
            cliente.end();
        }
    )    
}




module.exports = {
    cadastrarLivro, pesquisarDisponibilidade
};