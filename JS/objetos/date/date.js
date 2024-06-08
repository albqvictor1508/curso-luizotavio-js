const escopo = () => {
const data = new Date();
const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();
const milisegundos = data.getMilliseconds();

const msg = `${horas}: ${minutos}:${segundos}`

console.log(msg)
}

escopo();


