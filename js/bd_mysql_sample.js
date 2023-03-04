const mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "minha senha"
})
conn.connect((erro) => {
    if(erro) throw erro
    console.log('Mysql Conectado!!!');

    conn.query('CREATE DATABASE TesteNode', (erro, result) =>{
        if (erro) throw erro
        console.log('Nova Database Criada');
    })
})