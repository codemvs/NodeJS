const argv = require('yargs')
             .command('listar','Imprime en consola la tabla de multiplicar',{
                 base:{
                     demand:true,
                     alias:'b'
                 },
                 limite:{
                     alias:'l',
                     default:10
                 }
             })
             .command('crear','Genera un archivo con la tabla de multiplicar',{
                 base: {
                     demand: true,
                     alias: 'b'
                 },
                 limite: {
                     alias: 'l',
                     default: 10
                 }
             })
             .help()
             .argv;
const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

//leer parametros.
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log("Base: ",argv.base);
// console.log("Limite: ",argv.base);

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

