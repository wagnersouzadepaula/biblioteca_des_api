const cadastroautor = require('./cadastro_autor.js')

//Main

// CADASTRAR AUTOR
cadastroautor.cadastrarAutor({nomeautor: "Paul Barry", nacionalidade:'Estadunidense'},
    function(err, autorInserido) {
        console.log("Cadastrando Paul Barry")
        if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log("Autor cadastrado: ");
            console.log(autorInserido);
        }
    });

