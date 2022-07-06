const express = require('express');
const rota = express.Router();

const livroController = require('../controller/livro_controller.js');

/*------------------+
| CADASTRAR   LIVRO |
+------------------*/
rota.post('/', livroController.inserir);

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