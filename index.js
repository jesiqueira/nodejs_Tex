;(async () => {
    const axios = require('axios')
    const express = require('express')
    const url = require('url')
    const app = express()

    const categorias = require('./categorias.js')
    const getCategorias = await categorias.selectCategorias()
    app.use(express.json())

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

    app.get('/categorias', async (req, res) => {
        res.writeHead(200, { 'Contant-Type': 'text/json;charset=utf-8' })
        res.end(getCategorias)
    })
    app.get('/categorias/:id', async (req, res) => {
        res.writeHead(200, { 'Contant-Type': 'text/json;charset=utf-8' })
        res.end(await categorias.selectCategoriasView(req.params.id))
    })
    app.post('/categorias/insert', async (req, res) => {
        res.writeHead(200, { 'Contant-Type': 'text/json;charset=utf-8' })
        res.end('', await categorias.insereTeste(req.body))
    })

    app.get('/atualiza', async (req, res) => {
        let qs = url.parse(req.url, true).query
        await categorias.atualizaTeste(qs.item, qs.id, qs.col)
        res.writeHead(200, { 'Contant-Type': 'text/html;charset=utf-8' })
        res.end('<h2>Registro atualizado com sucesso<h2>')
    })

    app.post('/categorias/delete', async (req, res) => {
        res.writeHead(200, { 'Contant-Type': 'text/html;charset=utf-8' })
        res.end('<h2>Registro excluido com sucesso.</h2>', await categorias.deleteTeste(req.body))
    })

    app.listen(3000, () => {
        console.log('Server em atividade porta: 3000')
        console.log(__dirname);
    })

    function insere() {
        axios.post('http://localhost:3000/categorias/insert', {
            nome: 'Antonia',
            email: 'antonia.gmail.com',
            idade: 43,
        })
    }
    function atualizacao() {
        axios.get('http://localhost:3000/atualiza?item=lucas.siqueira@gmail.com&id=2&col=email')
    }

    function deletar(idteste) {
        axios.post('http://localhost:3000/categorias/delete', {
            id: idteste,
        })
    }
    // deletar(4)
})()
