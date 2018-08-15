const {crearArchivo} = require('./multiplicar/multiplicar');

//leer parametros.
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);

crearArchivo(base)
    .then(archivo=>{
        console.log(`El archivo ${archivo} se ha creado.`);        
    })
    .catch(err=>{
        console.log("Error:",err);        
    });
