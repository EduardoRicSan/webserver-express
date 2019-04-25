const http = require('http');

//Para poder escuchar peticiones http, se tiene que crear primero el servidor
//creando el servidor

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Eduardo',
            edad: 23,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');