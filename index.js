;(async () => {
    const express = require('express')

    const app = express()

    const categorias = require('./categorias.js')
    const getCategorias = await categorias.selectCategorias()

    app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/docs/index.html`)
        //   res.writeHead(200, { "Contant-Type": "text/html;charset=utf-8" });
        //   res.end("Iniciando meu primeiro app em Node.js com Express :)");
    })

    app.get('/sobre', (req, res) => {
        res.writeHead(200, { 'Contant-Type': 'text/html;charset=utf-8' })
        res.end('Sobre nosso App!')
    })

    app.get('/contato', (req, res) => {
        res.writeHead(200, { 'Contant-Type': 'text/html;charset=utf-8' })
        res.end('Entre em contato conosco!')
    })

    app.get('/categorias', (req, res) => {
      res.writeHead(200, { 'Contant-Type': 'text/json;charset=utf-8' })
      res.end(getCategorias)
  })

    app.listen(3000, () => {
        console.log('Server em atividade porta: 3000')
    })
})()
