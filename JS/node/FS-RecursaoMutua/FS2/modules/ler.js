const fs = require('fs').promises;

module.exports = (caminho) => {
    return fs.readFile(caminho, 'utf8');
}

//o erro aqui foi q faltou retornar a promisse e colocar o await na async function do app.js