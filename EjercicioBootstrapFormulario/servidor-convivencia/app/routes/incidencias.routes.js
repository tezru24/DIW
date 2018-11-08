module.exports = (app) => {
    const incidencias = require('../controllers/incidencias.controllers.js');

    // Create a new investigadores
    app.post('/incidencias', incidencias.create);

    app.get('/incidencias', incidencias.findAll);

    // Retrieve a single investigadores with investigadorId
    app.get('/incidencias/incidenciaLeve', incidencias.findLeve);
    app.get('/incidencias/incidenciaGrave', incidencias.findGrave);

    //Buscar una incidencia
    app.get('/incidencias/:incidenciaLeveId', incidencias.findOne);

    // Update a investigadores with investigadorId
    app.put('/incidencias/:incidenciaLeveId', incidencias.update);

    // Delete a investigadores with investigadorId
    app.delete('/incidencias/:incidenciaLeveId', incidencias.delete);
}