const mysql = require('mysql2')
const configDB = require('./js/config_bd')

var conn = mysql.createConnection({
    host: configDB.host,
    user: configDB.user,
    password: configDB.password,
})
conn.connect((erro) => {
    if (erro) throw erro
    console.log('Mysql Conectado!!!')

    conn.query('CREATE DATABASE TesteNode', (erro, result) => {
        if (erro) throw erro
        console.log('Nova Database Criada')
    })
})
