const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`)
    next()
})

router.get('/', (req, res) => {
    // res.send('<h1> HOME PAGE<h1>')
    res.sendFile(`${__dirname}/docs/index.html`)
})
router.get('/sobre', (req, res) => {
    res.send('<h1> HOME sobre<h1>')
})
router.get('/contato', (req, res) => {
    res.send('<h1> HOME contato<h1>')
})


module.exports = router