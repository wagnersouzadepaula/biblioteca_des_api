const cadastroautor = require('./cadastro_autor.js')

const cadastroLivro = require('./cadastro_livro.js')

//Main

// CADASTRAR AUTOR
// cadastroautor.cadastrarAutor({nomeautor: "Kathy Sierra", nacionalidade:'Estadunidense'},
//     function(err, autorInserido) {
//         console.log("Kathy Sierra")
//         if(err) {
//             console.log("Sistema esta com problemas");
//             console.log(err);
//         }
//         else {
//             console.log("Autor cadastrado: Kathy Sierra");
//             console.log(autorInserido);
//         }
//     });


//CADASTRAR LIVRO
// cadastroLivro.cadastrarLivro({isbnlivro: 'nao possui', titulolivro: 'Use A cabeça! Java', idautor: 3, editoralivro: 'Alta Books', anolivro: '2009-01-01', qtdelivrodisponivel: 1}, function(err, livroInserido){
//     console.log("Inserindo livro Use a cabeça! Java")
//     if(err){
//         console.log("Erro ao cadastrar livro");
//         console.log(err)
//     }
//     else {
//         console.log("Livro Cadastrado: Use a cabeça! Java");
//         console.log(livroInserido)
//     }
// })