const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// exprress hbbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// helpers  (funcion que se dispara cuando lo requiere el temple)


/*app.get('/', (req, res) => {

    let salida = {
            nombre: 'oscar',
            edad: 38,
            url: req.url
        }

    res.send(salida);
});*/

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'oscar'
    });

});
// aqui llamo a una nueva pagina
app.get('/about', (req, res) => {

    res.render('about');

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port} !!!!`);
})