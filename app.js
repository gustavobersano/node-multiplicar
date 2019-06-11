// requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(tabla => console.log(`La ${tabla} a sido listada!`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${colors.rainbow(archivo)} a sido creado!`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}

/* let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

 */