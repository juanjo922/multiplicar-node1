//requireds
const fs = require('fs');
const { resolve } = require('path');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {


    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }

        console.log('============'.green);
        console.log(`tabla del ${base}`.green);
        console.log('============'.green);


        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base * i} \n`);

        };

        console.log(data);

    })


}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base * i} \n`);

        };

        // const data = new Uint8Array(Buffer.from('Hello Node'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }

        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}