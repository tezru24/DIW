module.exports = (app) => {
    const incidenciasGraves = require('../controllers/incidencia-grave.controllers.js');

    // Create a new investigadores
    app.post('/incidenciaGrave', incidenciasGraves.create);

    // Retrieve all investigadores
    app.get('/incidenciaGrave', incidenciasGraves.findAll);

    // Retrieve a single investigadores with investigadorId
    app.get('/incidenciaGrave/:incidenciaGraveId', incidenciasGraves.findOne);

    // Update a investigadores with investigadorId
    app.put('/incidenciaGrave/:incidenciaGraveId', incidenciasGraves.update);

    // Delete a investigadores with investigadorId
    app.delete('/incidenciaGrave/:incidenciaGraveId', incidenciasGraves.delete);
}