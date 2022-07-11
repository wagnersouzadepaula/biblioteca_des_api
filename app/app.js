const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const livroRota = require('./rotas/livros_rota');
app.use('/api/biblioteca', livroRota);

const emprestimoRota = require('./rotas/emprestimo_rota');
app.use('/api/emprestimo', emprestimoRota);

const usuarioRota = require('./rotas/usuario_rota');
const { JsonWebTokenError } = require('jsonwebtoken');
app.use('/api/usuario', usuarioRota);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
})


/*
prof.ries@gmail.com / lhries@senacrs.com.br
 */