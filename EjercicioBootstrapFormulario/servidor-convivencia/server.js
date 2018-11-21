const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Utilizaremos body-parser para "parsear lo que nos pidan"
app.use(bodyParser.urlencoded({
    extended:true
}));

//Parsearemos los jsones
app.use(bodyParser.json());



// Nos conectaremos a la base de datos
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// Conectando en si mismo
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true}).then(()=>{
        console.log(" * Listo y preparado");
    }).catch(err => {
        console.log(" Algo ha salido mal : ",err);
        process.exit();
    });


// Vamos a definir un "punto de inicio"
app.get('/',(req,res)=>{
    res.redirect("menu-principal.html");
});

// Paginas publicas (estaticas)
app.use(express.static(path.join(__dirname, 'public')));

// Require Incidencias routes
require('./app/routes/incidencias.routes.js')(app);

// Escuchemos en un puerto

app.listen(3000,() => {
    console.log(" * Server EUW UP and Running");
});
