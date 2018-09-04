const axios = require('axios');
const argv = require('yargs').option({
    direccion:{
        alias:'d',
        desc:'Dreccion de la ciudad',
        demand:true
    }
}).argv;

console.log(argv.direccion);
//url amigable
let encodeUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDK-rZYNH8avPpdiTkdj3kjH0HSY9OVCGw`)
    .then(resp=>{
        //console.log(JSON.stringify(resp.data,undefined,2));
        var location = resp.data.results[0];

        console.log(`Location: ${location.formatted_address}`);
        console.log(`Lat: ${location.geometry.location.lat}`);
        console.log(`Lng: ${location.geometry.location.lng}`);
        
    })
    .catch(e => console.log("Error!!!",e));

