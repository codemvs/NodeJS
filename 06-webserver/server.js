const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public'))
// app.get('/',(req,res)=>{
//     // res.send('World');
//     let salida = {
//         nombre:"Salvador",
//         edad:32,
//         url:req.url
//     }

//     res.send(salida);
// });
app.get('/data', (req, res) => {
    
    res.send("Data");
});
app.listen(8080,()=>{
    console.log("Escucuchando peticiones en el puerto 8080");
});