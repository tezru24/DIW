module.exports = (app) => {
    const incidenciasLeves = require('../controllers/incidencia-leve.controllers.js');

    // Create a new investigadores
    app.post('/incidenciaLeve', incidenciasLeves.create);

    // Retrieve a single investigadores with investigadorId
    app.get('/incidenciaLeve/:incidenciaLeveId', incidenciasLeves.findOne);

    // Update a investigadores with investigadorId
    app.put('/incidenciaLeve/:incidenciaLeveId', incidenciasLeves.update);

    // Delete a investigadores with investigadorId
    app.delete('/incidenciaLeve/:incidenciaLeveId', incidenciasLeves.delete);
}