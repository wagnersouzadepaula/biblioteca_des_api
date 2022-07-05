//Rota: /api/produtos (localhost:3000/api/produtos)

const express = require('express');
const rota = express.Router();

const livroController = require('../controller/livro_controller.js');

//Inserir
rota.post('/', livroController.inserir);
//Listar
rota.get('/', livroController.listar);
//BuscarPorId
rota.get('/:id', livroController.buscarPorId);
//Atualizar
rota.put('/:id', livroController.atualizar);
//Deletar
rota.delete('/:id', livroController.deletar);

module.exports = rota;