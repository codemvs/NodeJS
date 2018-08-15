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
             .help()
             .argv;
const {crearArchivo} = require('./multiplicar/multiplicar');

//leer parametros.
let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log("Base: ",argv.base);
console.log("Limite: ",argv.base);

return;

crearArchivo(base)
    .then(archivo=>{
        console.log(`El archivo ${archivo} se ha creado.`);        
    })
    .catch(err=>{
        console.log("Error:",err);        
    });
