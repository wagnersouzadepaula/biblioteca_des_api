const express = require('express');
const rota = express.Router();

const emprestimoController = require('../controller/emprestimo_controller');

/*----------+
| EMPRESTAR |
| UM  LIVRO |
+----------*/
rota.post('/', emprestimoController.emprestar);


module.exports = rota;