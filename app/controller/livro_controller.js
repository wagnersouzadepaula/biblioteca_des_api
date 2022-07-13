const livroNegocio = require('../negocio/livros_negocio.js');


/*------------------+
| CADASTRAR   LIVRO |
+------------------*/
exports.inserir = (req, res) => {
    const livro = req.body;
  
    livroNegocio.inserir(livro, 
      function(err, produtoInserido) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.status(201).json(produtoInserido);
        }
      });  
}


/*---------------+
| LISTAR  LIVROS |
+---------------*/
exports.listar = (req, res) => {
    livroNegocio.listar(function (err, livros) {
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(livros);
      }
    })
}

/*---------------+
| BUSCAR  LIVROS |
|    POR   ID    |
----------------*/
exports.buscarPorId = (req, res) => {
    const id = req.params.id;

    livroNegocio.buscarPorId(id, function (err, livro){
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(livro);
      }
    });
}

/*-----------------+
|   ATUALIZAR UM   |
| LIVRO CADASTRADO |
+-----------------*/
exports.atualizar = (req, res) => {
    const id = req.params.id;
    const livro = req.body;
    livroNegocio.atualizar(id, livro, 
      function(err, livroAlterado) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(livroAlterado);
        }
      });
}

/*--------------+
| DELETAR LIVRO |  
|     POR  ID   |
+--------------*/
exports.deletar = (req, res) => {
    const id = req.params.id;
    livroNegocio.deletar(id, function (err, livro){
        if(err) {
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(livro);
        }
      });
  }