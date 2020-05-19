const http = require('http');

// crear servidor
// especificar el puert0
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'oscar',
            edad: 38,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end(); // se confirma que ya se recibio la respuesta


    })
    .listen(8080);

console.log('escuchando el puerto 8080');