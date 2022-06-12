const cadastroautor = require('./cadastro_autor.js')

const cadastroLivro = require('./cadastro_livro.js')

const cadastroAluno = require('./cadastro_alunos.js')

const cadastroUsuario = require('./cadastro_usuarios.js')

const emprestimoDeLivro = require('./emprestimoDeLivros')

//Main

/*CADASTRAR AUTOR*/
/*
cadastroautor.cadastrarAutor({nomeautor: "Andre Aquiles", nacionalidade:'Brasileiro'}, function(err, autorInserido) {
        console.log("Kathy Sierra")
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

//CADASTRAR LIVRO
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

/*CONSULTAR DISPONIBILIDADE DE LIVRO*/

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


/* CADASTRAR ALUNO */
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

/* CADASTRAR USUARIO */
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

/* EMPRESTAR UM LIVRO */
emprestimoDeLivro.emprestarLivro({idlivro: 3, idaluno: 1, dataemprestimo:'2022-06-13', idusuario: 1}, function(err, res){
    if (err) {
        console.log("Sistema de empréstimo de livros está com problemas");
    }
    else{
        console.log(res)
    }
})