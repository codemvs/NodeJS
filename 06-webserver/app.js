const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify({
        nombre:"Salvador",
        edad:25,
        url:req.url
    },undefined,2));
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');