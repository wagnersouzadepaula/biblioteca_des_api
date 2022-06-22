const cadastroautor = require('./cadastro_autor.js')

const cadastroLivro = require('./cadastro_livro.js')

const cadastroAluno = require('./cadastro_alunos.js')

const cadastroUsuario = require('./cadastro_usuarios.js')

const emprestimoDeLivro = require('./emprestimoDeLivros')

//Main

/*############################################################################# 
######################################  AUTORES  ##############################
#############################################################################/*

/*###############################
#      CADASTRAR    AUTOR       #
###############################*/
/*
cadastroautor.cadastrarAutor({nomeautor: "Rodrigo Cesar rebello Pinho", nacionalidade:'Brasileiro'}, function(err, autorInserido) {
        console.log("")
            if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log("Autor cadastrado: Kathy Sierra");
            console.log(autorInserido);
        }
    }
);
*/




/*############################################################################# 
######################################  ALUNOS  ###############################
#############################################################################/*

/*-------------------------------
|      CADASTRAR    ALUNO       |
-------------------------------*/
/*
cadastroAluno.cadastrarAluno({matriculaaluno: 123, nomealuno: "Aureliano Buendia", telefonealuno: '51999887766'}, function(err, alunoinserido){
    if (err) {
        console.log("Erro ao inserir o aluno.")
    }
    else{
        console.log(alunoinserido)
    }
})
*/


/*############################################################################# 
###################################### USUÁRIOS ###############################
#############################################################################/*

/*-------------------------------
|      CADASTRAR   USUARIO      |
-------------------------------*/

/*
cadastroUsuario.cadastrarUsuarios({nomeusuario: "Wagner", senhausuario: 12345}, function(err,res){
    if (err) {
        console.log("Cadastro de usuários com problemas");
    }
    else{
        console.log(res)
    }
})
*/

/*############################################################################# 
######################################  LIVROS  ###############################
#############################################################################/*

/*-------------------------------
|      CADASTRAR    LIVRO       |
-------------------------------*/
/*
cadastroLivro.cadastrarLivro({isbnlivro: '9788566250121', titulolivro: 'Agile Desenvolvimento de software com entregas frequentes e foco no valor de negócio', idautor: 4, editoralivro: 'Casa do Código', anolivro: '2013-01-01', qtdelivrodisponivel: 1}, function(err, livroInserido){
    console.log("Inserindo livro...")
    if(err){
        console.log("Erro ao cadastrar livro");
        console.log(err)
    }
    else {
        console.log(livroInserido)
    }
})
*/


/*-------------------------------
|       LISTAR     LIVROS       |
-------------------------------*/
/*
cadastroLivro.listar(
    function(err, livro) {
        console.log("Listar: ");
        if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log(livro);

        }
    }
);
*/


/*-------------------------------
|    BUSCAR  LIVROS  POR  ID    |
-------------------------------*/
/*
cadastroLivro.buscarPorId(4, 
    function(erro, livros) {
        console.log("BuscarPorId(2): ");
        if(erro) {
            console.log("Sistema está com problemas");
            console.log(erro);
        }
        else {
            console.log(livros);
        }
});
*/


/*-------------------------------
|  CONSULTAR    DISPONIBILIDADE |
|           DE LIVRO            |
-------------------------------*/
/*
cadastroLivro.pesquisarDisponibilidade(3, function (err, res){
    console.log("consultando quantidade de livro disponível do id 3");
    if(err){
        console.log("Erro ao consultar livro");
        console.log(err);
    } 
    else {
        console.log(res)
    }
})
*/


/*-------------------------------
| ATUALIZAR UM LIVRO CADASTRADO |
-------------------------------*/
/*
cadastroLivro.atualizar(8, {isbnlivro: '9788566250121', titulolivro: 'Agile Desenvolvimento de software com entregas frequentes e foco no valor de negócio edição atualizada', idautor: 4, editoralivro: 'Casa do Código', anolivro: '2013-01-01', qtdelivrodisponivel: 1}, 
    function(erro, produto) {
        console.log("Atualizar Produto(1): ");
        if(erro) {
            console.log("Erro ao atualizar livro");
            console.log(err);
        }
        else {
            console.log(produto);
        }
});
*/


/*-------------------------------
|    DELETAR  LIVROS  POR  ID   |
-------------------------------*/
/*
cadastroLivro.deletar(7, function(erro, livro) {
    console.log("Livro deletado (7): ");
    if(erro) {
        console.log("Sistema está com problemas");
        console.log(erro);
    }
    else {
        console.log(livro);
    }
});
*/

/*############################################################################# 
##############################  EMPRÉSTIMO DE LIVROS  #########################
#############################################################################/*

/*-------------------------------
|       EMPRESTAR UM LIVRO      |
-------------------------------*/
/*
emprestimoDeLivro.emprestarLivro({idlivro: 3, idaluno: 1, dataemprestimo:'2022-06-13', idusuario: 1}, function(err, res){
    if (err) {
        console.log("Sistema de empréstimo de livros está com problemas");
    }
    else{
        console.log(res)
    }
})
*/