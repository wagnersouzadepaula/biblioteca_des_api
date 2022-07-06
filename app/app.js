const express = require('express');

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const livroRota = require('./rotas/livros_rota');
app.use('/api/biblioteca', livroRota);

const emprestimoRota = require('./rotas/emprestimo_rota');
app.use('/api/emprestimo', emprestimoRota);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/*
prof.ries@gmail.com / lhries@senacrs.com.br
 */