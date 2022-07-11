const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '151103',
    database: 'biblioteca'
};

let qtde = Number;


/*-------------------------------
|       EMPRESTAR UM LIVRO      |
-------------------------------*/
function emprestarLivro(emprestimoDeLivros, callback){
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO emprestimos (idlivro, idaluno, dataemprestimo, idusuario) VALUES ($1, $2, $3, $4) RETURNING *"
    const values = [emprestimoDeLivros.idlivro, emprestimoDeLivros.idaluno, emprestimoDeLivros.dataemprestimo, emprestimoDeLivros.idusuario];

    pesquisarDisponibilidade(emprestimoDeLivros.idlivro, function(err, res){
        if (err) {
            console.log("Sistema de verificação de disponibilidade de livros está com problema")
        }
        else{
            qtde = res.qtdelivrodisponivel;
            if(qtde == 0) {
                console.log("O livro solicitado não possui unidade disponível para empréstimo");
                cliente.end();
            } else {
                qtde -= 1;
                cliente.query(sql, values, 
                    function(err, res){
                    console.log("Livro emprestado com sucesso!")
                    const sqlReduzQtdeLivro = "UPDATE livros SET qtdelivrodisponivel = $1 WHERE idlivro = $2";
                    let qtdesql = [qtde, emprestimoDeLivros.idlivro];
                    cliente.query(sqlReduzQtdeLivro, qtdesql, function(err, res){
                    console.log("Estoque de livros atualizado com sucesso.");
                    cliente.end();
                });
                });
            }
        }
    });
}


function pesquisarDisponibilidade(id, callbackPesquisa){
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "SELECT qtdelivrodisponivel FROM livros WHERE idlivro = $1";
    const values = [id];

    cliente.query(sql, values,
        function (err, res) {
            let qtde = 0
            let qtdeDisponivel = []; 
            if(err) {
                callbackPesquisa(err, qtdeDisponivel);                
            }
            else if (res.rows && res.rows.length > 0) {
                callbackPesquisa(err,res.rows[0])
                qtdeDisponivel = res.rows;
                qtde = qtdeDisponivel[0].qtdelivrodisponivel

            }
            else {
                console.log("Produto nao encontrado");
            }
            cliente.end();
            return qtde
        }
    )    
}

module.exports = {emprestarLivro}

