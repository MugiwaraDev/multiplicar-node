// Requireds
const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        console.log(`El valor introducido no ${ base } no es un número`);
    }

    console.log('======================'.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('======================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } X ${ i } = ${ base * i }`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducito ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } X ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        })
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}