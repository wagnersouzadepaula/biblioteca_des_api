const express = require('express');
const rota = express.Router();
const jwt = require('jsonwebtoken');


const livroController = require('../controller/livro_controller.js');

/*------------------+
| VERIFICA USUARIO |
+------------------*/
function verificaJWT(req, res, next){
    // const token = req.headers['Authorization'];
    const authToken = req.headers.authorization.split(' ')[1];
    jwt.verify(authToken, 'nelson', (err, decoded) => {
      if(err) {
        console.log("deu erro");
        // console.log(authToken);
        // console.log(decoded);
        console.log(err);
        console.log(authToken);
        return res.status(401).end()
      } else {
        req.userId = decoded.idusuario;
        next();
      }
    })
  };

/*------------------+
| CADASTRAR   LIVRO |
+------------------*/
rota.post('/', verificaJWT, livroController.inserir);

/*---------------+
| LISTAR  LIVROS |
+---------------*/
rota.get('/', livroController.listar);

/*---------------+
| BUSCAR  LIVROS |
|    POR   ID    |
----------------*/
rota.get('/:id', livroController.buscarPorId);

/*-----------------+
|   ATUALIZAR UM   |
| LIVRO CADASTRADO |
+-----------------*/
rota.put('/:id', livroController.atualizar);

/*--------------+
| DELETAR LIVRO |  
|     POR  ID   |
+--------------*/
rota.delete('/:id', livroController.deletar);

module.exports = rota;