const axios = require('axios');

const getClima = async(lat, lng)=>{
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=624acca7e504204b7872a39c7ae7fb56`);
    
    return resp.data.main.temp;
}

module.exports={
    getClima
}

