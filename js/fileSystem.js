const fs = require('fs')
let nomeArquivo = 'arquivoNode.md'

// fs.writeFile(nomeArquivo, '# Arquivo criado com Node.js', (erro) => {
//     if (erro) throw erro
//     console.log(`Arquivo ${nomeArquivo} criado`)
// })

fs.appendFile(nomeArquivo, '\n- modulo file System em node', (erro) => {
    if (erro) throw erro
    console.log(`Arquivo ${nomeArquivo} Atualizado.`)
})
