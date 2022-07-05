const livroRepositorio = require('../persistencia/cadastro_livro.js');


/*-------------------------------
|      CADASTRAR    LIVRO       |
-------------------------------*/
function inserir (livro, callback) {
    if(!livro || !livro.isbnlivro || !livro.titulolivro || !livro.idautor || !livro.editoralivro || !livro.anolivro || !livro.qtdelivrodisponivel){
        const erro = { 
            mensagem: "Todos os campos devem ser preenchidos corretamente!",
            numero: 400
        };
        callback(erro, undefined)
    }
    else {
        livroRepositorio.cadastrarLivro(livro, callback);
    }  
}


/*-------------------------------
|       LISTAR     LIVROS       |
-------------------------------*/
function listar (callback) {
    livroRepositorio.listar(callback);
}


/*-------------------------------
|    BUSCAR  LIVROS  POR  ID    |
-------------------------------*/
function buscarPorId(id, callback){
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else { 
        livroRepositorio.buscarPorId(id, callback);
    }
}


/*-------------------------------
|  CONSULTAR    DISPONIBILIDADE |
|           DE LIVRO            |
-------------------------------*/
function pesquisarDisponibilidade(id, callback){
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else { 
        livroRepositorio.pesquisarDisponibilidade(id, callback);
    }
}

/*-------------------------------
| ATUALIZAR UM LIVRO CADASTRADO |
-------------------------------*/
function atualizar(id, livro, callback) {
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else if(!livro || !livro.isbnlivro || !livro.titulolivro || !livro.idautor || !livro.editoralivro || !livro.anolivro || !livro.qtdelivrodisponivel) {
        const erro = { 
            mensagem: "Todos os campos devem ser preenchidos corretamente!",
            numero: 400
        };
        callback(erro, undefined)
    }
    else { 
        livroRepositorio.atualizar(id, livro, callback);
    }

}


/*-------------------------------
|    DELETAR  LIVROS  POR  ID   |
-------------------------------*/
function deletar(id, callback) {
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else {
        livroRepositorio.deletar(id,callback);
    }
}



module.exports = {
    inserir, listar, buscarPorId, pesquisarDisponibilidade, atualizar, deletar
}



