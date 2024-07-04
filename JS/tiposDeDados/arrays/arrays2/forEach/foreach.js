function criaArray() {
    const numeros = [25,8,15,18,22,23,89,100,230,999];
    return numeros;
}

function percorrerArray() {
    const array = criaArray();
    const percorrer = array.forEach((valores, indices) => console.log(valores + ' forixchi', indices));
    //mais recomendável fazer com map, porém dessa forma tem como. 
}
percorrerArray();