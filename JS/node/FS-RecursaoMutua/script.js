const path = require('path');
const fs = require('fs').promises;
/*
fs.readdir(path.resolve(__dirname))
.then(valor => console.log(valor.pop()))
.catch(e => console.log(`${e}: eu amo minha mulher!`))
*/

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fullPath);
        if(/node_modules/g.test(fullPath)) continue;
        
        
        if(stats.isDirectory()) {
            readdir(fullPath);
            continue;
        } 
        if(!/html/g.test(fullPath)) continue;
        console.log(fullPath);
    }
}
readdir('C:\\Users\\Fatima\\Documents\\GitHub\\cursoLuizOtavioJS\\JS\\');

//lerDir: se o valor do endereco for falso, o path vai encontrar o arquivo atual, se for verdadeiro, ele vai encontrar o endereco que foi enviado.

//walk: só dá console.log