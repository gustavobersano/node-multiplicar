// requireds
const fs = require('fs'); //Propio de Node
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if ( !Number(base) ){
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        if ( !Number(limite) ){
            reject(`El valor introducido ${ limite } no es un número.`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tabla-${base}-hasta-${limite}.txt`);
        });
    });
};

let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if ( !Number(base) ){
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        if ( !Number(limite) ){
            reject(`El valor introducido ${ limite } no es un número.`);
            return;
        }

        console.log('=========================='.red);
        console.log(`Tabla de ${ base } - hasta ${ limite }`.red);
        console.log('=========================='.red);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i} - hasta ${limite}`);
        }
        resolve(`tabla-${base}-hasta-${limite}`);
    });
};

module.exports = {
    crearArchivo,
    listar
}

