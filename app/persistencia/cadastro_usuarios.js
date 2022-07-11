const {Client} = require('pg');
const jwt = require('jsonwebtoken');

const conexao = {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '151103',
    database: 'biblioteca'
};

/*------------------+
| CADASTRAR USUARIO |
+------------------*/
function cadastrarUsuarios(usuarios, callback){
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO usuarios (nomeusuario, senhausuario) VALUES ($1, $2) returning *";
    const values = [usuarios.nomeusuario, usuarios.senhausuario];

    cliente.query(sql, values, function(err, res){
        callback(err,res.rows[0]);
        cliente.end();
    })
}

/*----------------+
| LISTAR USUARIOS |
+----------------*/
function listar(callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM usuarios ORDER BY idusuario;";
    cliente.query(sql, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let usuarios = res.rows;
                callback(undefined, usuarios);     
            }
            cliente.end();
        }
    )    
}

/*----------------+
| BUSCAR USUARIOS |
|    POR    ID    |
+----------------*/
function buscarPorId(id, callback){
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM usuarios WHERE idusuario = $1";
    const values = [id];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let usuario = res.rows[0];
                callback(undefined, usuario);
            }
            else {
                const error = "Usuario nao encontrado";
                callback(error, undefined);
            }

            cliente.end();
        }
    )    
}


/*-----------------+
| VALIDAR USUARIOS |
+-----------------*/
function validarUsuario(usuario, callback){
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "SELECT * FROM USUARIOS WHERE nomeusuario = $1";
    const values = [usuario.nomeusuario];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0 && res.rows[0].nomeusuario == usuario.nomeusuario && res.rows[0].senhausuario == usuario.senhausuario) {
                const token = jwt.sign({idusuario:1, nomeusuario: "Wagner"}, '1234', {expiresIn: 3600});
                callback(err,token);
            }
            else {
                const error = "Usuario nao encontrado";
                callback(error, undefined);
            }
            cliente.end();

        }
    )
}

module.exports = {
    cadastrarUsuarios, listar, buscarPorId, validarUsuario
}