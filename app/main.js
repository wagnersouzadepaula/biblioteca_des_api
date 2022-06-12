const cadastroautor = require('./cadastro_autor.js')

const cadastroLivro = require('./cadastro_livro.js')

const cadastroAluno = require('./cadastro_alunos.js')

const cadastroUsuario = require('./cadastro_usuarios.js')

const emprestarLivro = require('./emprestimoDeLivros')

//Main

/*CADASTRAR AUTOR*/
/*
cadastroautor.cadastrarAutor({nomeautor: "Kathy Sierra", nacionalidade:'Estadunidense'}, function(err, autorInserido) {
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
cadastroLivro.cadastrarLivro({isbnlivro: 'nao possui', titulolivro: 'Use A cabeça! Java', idautor: 3, editoralivro: 'Alta Books', anolivro: '2009-01-01', qtdelivrodisponivel: 1}, function(err, livroInserido){
    console.log("Inserindo livro Use a cabeça! Java")
    if(err){
        console.log("Erro ao cadastrar livro");
        console.log(err)
    }
    else {
        console.log("Livro Cadastrado: Use a cabeça! Java");
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