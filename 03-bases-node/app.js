/**
 * Requireds
 */
const fs = require('fs');

let base = 35;
let multiplicacion='';
for (let i = 1; i <= 10; i++) {
    multiplicacion+=`${base} * ${i} = ${base*i}\n`;
}

fs.writeFile(`./tablas/tabla-${base}.txt`,multiplicacion,err=>{
    if(err)throw err;
    console.log(`Archivo tabla-${base}.txt ha sido creado`);     
});