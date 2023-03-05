const express = require('express')
const app = express()
const porta = 3000

app.get('/', (req, res) => {
    res.send('<h1>Meu exempl Nodejs<H!>')
})

app.listen(porta, () => {
    console.log(`Servidor em Atividade na porta ${porta}`)
})

const f1 = function (req, res, next) {
    console.log('1° Manipulador executando!')
    // res.send('Pagina exempl ok!')
    next()
}
const f2 = function (req, res, next) {
    console.log('2° Manipulador executando!')
    next()
}

app.get('/exemplo/f1', [f1, f2], (req, res, next) =>{
    console.log('3° Maniúlador executado');
    res.send('Pagina exempl ok!')
})
