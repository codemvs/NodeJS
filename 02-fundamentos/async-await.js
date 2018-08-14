/**
 * Async Await : funciones asincronas
 */

//  let getNombre=async()=>{
//     //  throw new Error('No existe un nombre para ese usuario');
//      return 'Salvador';
//  };
 //equivalencia
let getNombre =() => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Salvador');
        }, 300);
    });
};

let saludo = async()=>{
    let nombre =await getNombre();    
    return `Hola ${nombre}`;
}

//  getNombre().then(nombre=>{
//      console.log(nombre);     
//  }).catch(e=>{
//      console.log("Error async",e);     
//  })
 
saludo().then(mensaje => {
    console.log(mensaje);
});
