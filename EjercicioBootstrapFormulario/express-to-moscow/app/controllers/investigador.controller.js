const IncidenciaLeve = require('../models/investigador.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el IncidenciaLeve
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"IncidenciaLeve Vacio..." 
        });
    }

    const investigador = new IncidenciaLeve({
        nombre: req.body.nombre || "Sin Nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.vida|| 42,
        puntosCordura: req.body.puntosCordura  || 21
    })

    investigador.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating investigador"
        });
    });
};



// Obtener todos los investigadores
exports.findAll = (req,res) => {

        IncidenciaLeve.find().then(investigadores=>{
            res.send(investigadores);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un investigador por Id
exports.findOne = (req,res) => {
    IncidenciaLeve.findById(req.params.investigadorId)
    .then(investigador=>{
        if (!investigador){
            return res.status(404).send({
                message: "IncidenciaLeve NOT FOUND con ID " +req.params.investigadorId
            });
            }
            res.send(investigador);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "IncidenciaLeve no encontrado con ese id :" +req.params.investigadorId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.investigadorId
             });
        });
    };




// Actualizar un investigador
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "IncidenciaLeve vacio"
        });
    }

    // Find note and update it with the request body
    IncidenciaLeve.findByIdAndUpdate(req.params.investigadorId, {
        nombre: req.body.nombre|| "Sin nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.puntosVida || 0,
        puntosCordura: req.body.puntosCordura || 0
    }, {new: true})
    .then(investigador => {
        if(!investigador) {
            return res.status(404).send({
                message: "IncidenciaLeve not found with id " + req.params.investigadorId
            });
        }
        res.send(investigador);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "IncidenciaLeve not found with id " + req.params.investigadorId
            });                
        }
        return res.status(500).send({
            message: "Error updating IncidenciaLeve with id " + req.params.investigadorId
        });
    });
};

// Borrar un investigador 
exports.delete = (req,res)=>{
    IncidenciaLeve.findByIdAndRemove(req.params.investigadorId)
    .then(investigador => {
        if(!investigador) {
            return res.status(404).send({
                message: "IncidenciaLeve no encontrado " + req.params.investigadorId
            });
        }
        res.send({message: "Cthulhu ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "IncidenciaLeve not found with id " + req.params.investigadorId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese IncidenciaLeve with id " + req.params.investigadorId
        });
    });
};