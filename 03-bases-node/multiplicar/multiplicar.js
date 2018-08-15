/**
 * Requireds
 */
const fs = require('fs');
const colors = require('colors');
/**
 * crear archivo txt
 * @param {*} base 
 */
let crearArchivo = (base, limite=10)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject(`El valor ingresado ${base}.`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, err => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

let listarTabla = (base, limite=10)=>{
    console.log('========================');
    console.log(`tabla del ${base}`.green);
    console.log('========================');
    
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}`);                
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}
