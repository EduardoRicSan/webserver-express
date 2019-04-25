const express = require('express')
const app = express();

const hbs = require('hbs');


//Import helpers
require('./hbs/helpers/helpers');


const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




//configurando una solicitud get cuando el path es /
app.get('/', function(req, res) {
    ///renderizando el archivo home.hbs
    res.render('home', {
        nombre: 'Eduardo'
    });

});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', function(req, res) {
    // res.send('Hello World')

    res.send('Hola Data!!');

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});