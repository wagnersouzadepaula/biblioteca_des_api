const usuarioRepositorio = require('../persistencia/cadastro_usuarios.js');


/*------------------+
| CADASTRAR USUARIO |
+------------------*/
function inserir (usuario, callback) {
    if(!usuario || !usuario.nomeusuario || !usuario.senhausuario){
        const erro = { 
            mensagem: "Todos os campos devem ser preenchidos corretamente!",
            numero: 400
        };
        callback(erro, undefined)
    }
    else {
        usuarioRepositorio.cadastrarUsuarios(usuario, callback);
    }  
}


/*----------------+
| LISTAR USUÁRIOS |
+----------------*/
function listar (callback) {
    usuarioRepositorio.listar(callback);
}


/*----------------+
| BUSCAR USUÁRIOS |
|    POR    ID    |
+----------------*/
function buscarPorId(id, callback){
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else { 
        usuarioRepositorio.buscarPorId(id, callback);
    }
}

/*------------------+
| VALIDAR   USUARIO |
+------------------*/
function validarUsuarios (usuario, callback) {
    if(!usuario|| !usuario.nomeusuario || !usuario.senhausuario){
        const erro = { 
            mensagem: "Todos os campos devem ser preenchidos corretamente!",
            numero: 400
        };
        callback(erro, undefined)
    }
    else {
        usuarioRepositorio.validarUsuario(usuario, callback); 
    }  
}



module.exports = {
    inserir, listar, buscarPorId, validarUsuarios
}



