const livroNegocio = require('../negocio/livros_negocio.js');

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