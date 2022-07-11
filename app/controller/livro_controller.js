const livroNegocio = require('../negocio/livros_negocio.js');
const jwt = require('jsonwebtoken');


/*------------------+
| VERIFICA USUARIO |
+------------------*/
function verificaJWT(req, res, next){
  const token = req.headers['Authorization'];
  jwt.verify(token, '1234', (err, decoded) => {
    if(err) {
      console.log("deu erro");
      console.log(typeof(token));
      console.log(decoded);
      console.log(err);
      return res.status(401).end()
    } else {
      req.userId = decoded.idusuario;
    }

    next();
  })
};


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