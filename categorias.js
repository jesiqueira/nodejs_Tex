const configDB = require('./js/config_bd')
async function conecta(){
    const mysql = require('mysql2/promise')
    const conn = await mysql.createConnection({
        host: configDB.host,
        user: configDB.user,
        password: configDB.password,
        database: 'restaurante_delivery'
    })

    console.log('Mysql Conectado!');
    global.connection = conn
    return connection
}


async function selectCategorias(){
    const connect = await conecta()
    const [rows] = await connect.query('SELECT * FROM selectCategorias')
    console.log(rows);
    return JSON.stringify(rows)
}


async function selectCategoriasView(id){
    const connect = await conecta()
    const [rows] = await connect.query(`SELECT * FROM selectCategorias WHERE id_categoria_tipo=${id}`)
    console.log(rows);
    return JSON.stringify(rows)
}

async function insereTeste(dados){
    const connect = await conecta()
    const values = [dados.nome, dados.email, dados.idade]
    const [rows] = await connect.query('INSERT INTO teste (nome, email, idade) VALUES (?,?,?)', values)
    console.log('Insert ok!');
}

async function atualizaTeste(valor, id, col){
    console.log('Cheguei');
    const connect = await conecta()
    const values = [valor, id, col]
    console.log('Update ok');
    return await connect.query(`UPDATE teste SET ${col}=? WHERE id_teste = ?`, values)
}

async function deleteTeste(dados){
    const connect = await conecta()
    const values = [dados.id]
    const [rows] = await connect.query('DELETE FROM teste WHERE id_teste=?', values)
    console.log('Delete ok!');
}
// insereTeste({nome:'Lucas', email: 'lucas@gmail.com', idade: 9})

// selectCategorias()

// atualizaTeste('lucasSiqueira@gmail.com', '2', 'email')

// deleteTeste({id:5})

module.exports = {selectCategorias, selectCategoriasView, insereTeste, atualizaTeste, deleteTeste}