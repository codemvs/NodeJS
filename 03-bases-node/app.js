
const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(argv.base, comando);
    
        listarTabla(argv.base, argv.limite);      
        break;
    case 'crear':
        console.log(argv);
        
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`El archivo ${archivo} se ha creado.`);
            })
            .catch(err => {
                console.log("Error:", err);
            });
        break;
    default:
        console.log('comando no reconocido');        
        break;
}

