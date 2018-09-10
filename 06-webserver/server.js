const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers/helpers');

//public archivos
app.use(express.static(__dirname+'/public'));

//Express HBS engine
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine','hbs');



app.get('/',(req,res)=>{
      res.render('home',{
          nombre:'salvador morales vicente'
      });
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/data', (req, res) => {    
    res.send("Data");
});
app.listen(port,()=>{
    console.log(`Escucuchando peticiones en el puerto ${port}`);
});