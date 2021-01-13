//requireds
// const fs = require('./fs'); "./" recoge el archivo que esta en
// algun lado del proyecto, cuando no lleva "./" indica que es un 
//paquete de los modulos de node.
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log('multiplicacion exitosa'))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + `${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}







//let base = 5;
// console.log(process.argv);
// let argv2 = process.argv;
// console.log('Limite', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];