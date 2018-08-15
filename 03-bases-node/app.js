const {crearArchivo} = require('./multiplicar/multiplicar');

let base='asc';

crearArchivo(base)
    .then(archivo=>{
        console.log(`El archivo ${archivo} se ha creado.`);
        
    })
    .catch(err=>{
        console.log("Error:",err);        
    });
