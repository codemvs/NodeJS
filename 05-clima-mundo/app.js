// const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion:{
        alias:'d',
        desc:'Dreccion de la ciudad',
        demand:true
    }
}).argv;

let getInfo = async(direccion)=>{
    try{
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;
    }catch(e){
        return `No es posible determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje=>console.log(mensaje))
    .catch(e=>console.log(e));
