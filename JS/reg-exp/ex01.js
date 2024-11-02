const {cpfs} = require("./base");

// console.log(cpfs.match(/[0-9]+\.{1}[0-9]+\.{1}[0-9]+-{1}[0-9]+[^\n]/g));
console.log(cpfs.match(/\d+\.\d+\.\d./g))
// console.log(cpfs.match(/[0-9]+/g))