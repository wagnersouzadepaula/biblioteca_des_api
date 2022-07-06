const livroRepositorio = require('../persistencia/emprestimoDeLivros.js');

/*----------+
| EMPRESTAR |
| UM  LIVRO |
+----------*/
function emprestarLivro (livro, callback) {
    if(isNaN(livro.idlivro) || isNaN(livro.idaluno) || isNaN(livro.idusuario)){
        const erro = { 
            mensagem: "Livro, aluno ou usuário não foram informados corretamente.",
            numero: 400
        }
        callback(erro, undefined);
    }
    else if(!livro.idlivro || !livro.idaluno || !livro.dataemprestimo || !livro.idusuario) {
        const erro = { 
            mensagem: "Todos os campos devem ser preenchidos corretamente!",
            numero: 400
        };
        callback(erro, undefined);
    }
    else { 
        livroRepositorio.emprestarLivro(livro, callback);
    }  
}


module.exports = {
    emprestarLivro
}