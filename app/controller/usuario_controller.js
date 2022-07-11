const usuarioNegocio = require('../negocio/usuario_negocio.js');
const jwt = require('jsonwebtoken');



/*------------------+
| CADASTRAR USUARIO |
+------------------*/
exports.inserir = (req, res) => {
    const usuario = req.body;
  
    usuarioNegocio.inserir(usuario, 
      function(err, usuarioInserido) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.status(201).json(usuarioInserido);
        }
      });  
}


/*---------------+
| LISTAR USUARIO |
+---------------*/
exports.listar = (req, res) => {
    usuarioNegocio.listar(function (err, usuarios) {
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(usuarios);
      }
    })
}

/*---------------+
| BUSCAR USUARIO |
|   POR    ID    |
----------------*/
exports.buscarPorId = (req, res) => {
    const id = req.params.id;

    usuarioNegocio.buscarPorId(id, function (err, usuario){
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(usuario);
      }
    });
}

/*------------------+
| VALIDAR   USUARIO |
+------------------*/
exports.validarUsuario = (req, res) => {
  const usuario = req.body;

  usuarioNegocio.validarUsuarios(usuario, 
    function(err, usuarioVerificado) {
      if(err){
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.status(201).json(usuarioVerificado);
        console.log(usuarioVerificado);
      }
    });  
}


/*------------------+
| VALIDAR   USUARIO |
+------------------*/
/*
exports.validarUsuario = (req, res) => {

  const usuario = req.body;
  if (usuario.nomeusuario == "Wagner" && req.body.senhausuario == '12345'){
    const token = jwt.sign({idusuario:1, nomeusuario: "Wagner"}, "w@gner", {expiresIn: 3600});
    return res.json({auth: true, token});
  } else {
    res.status(401).end();
  }
}
*/

