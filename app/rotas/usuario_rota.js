const express = require('express');
const rota = express.Router();

const usuarioController = require('../controller/usuario_controller.js');

/*------------------+
| CADASTRAR USUARIO |
+------------------*/
rota.post('/cadastrarUsuario/', usuarioController.inserir);

/*----------------+
| LISTAR USUARIOS |
+----------------*/
rota.get('/listarUsuario/', usuarioController.listar);

/*---------------+
| BUSCAR USUARIO |
|    POR   ID    |
----------------*/
rota.get('/:id', usuarioController.buscarPorId);


/*----------------+
| VALIDAR USUARIO |
+----------------*/
rota.post('/validar/', usuarioController.validarUsuario);


module.exports = rota;