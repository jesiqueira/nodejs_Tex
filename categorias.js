async function conecta(){
    const mysql = require('mysql2/promisse')
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'senhaBancodeDados',
        database: 'bancdoDeDados'
    })

    console.log('Mysql Conectado!');
    global.connection = conn
    return connection
}


async function selectCategorias(){
    const connect = await conecta()
    const [rows] = await connect.query('SELECT * FROM nomedatabela')
    console.log(rows);
    return JSON.stringify(rows)
}

// module.exports = {selectCategorias}
module.exports = {selectCategorias}