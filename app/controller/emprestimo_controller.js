const livroNegocio = require('../negocio/emprestimo_negocio.js');

/*----------+
| EMPRESTAR |
| UM  LIVRO |
+----------*/
exports.emprestar = (req, res) => {
    const livro = req.body;
  
    livroNegocio.emprestarLivro(livro, 
      function(err, produtoInserido) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.status(201).json(produtoInserido);
        }
      });  
}
