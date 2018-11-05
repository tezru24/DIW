const IncidenciaLeve = require('../models/incidencias.models.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el Investigador
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Incidencia Vacía..." 
        });
    }
    
    const incidenciaLeve = new incidenciaLeve({
        alumno: req.body.alumno || "Sin Nombre Alumno",
        profesor: req.body.profesor || "Sin Nombre Profesor",
        grupo: req.body.grupo || "Grupo Vacio",
        lugar: req.body.lugar || "Sin Lugar",
        fecha: req.body.fecha || 24-12-2018,
        horario: req.body.horario || 12,
        fechaIncidente: req.body.fechaIncidente || 24-12-2018,
        hora: req.body.hora || 12,
        textareaDescripcion: req.body.textareaDescripcion || "Sin Descripcion",
        inputRealitzacio: req.body.inputRealitzacio || "Vacio",
        fechaRealitzacio: req.body.fechaRealitzacio || 24-12-2018,
        horariRealitzacio: req.body.horariRealitzacio || 12,
        fechaSuspensio1: req.body.fechaSuspensio1 || 24-12-2018,
        fecha2Suspensio1: req.body.fecha2Suspensio1 || 12,
        inputSuspensio2: req.body.inputSuspensio2 || "Vacio",
        fecha1Suspensio2: req.body.fecha1Suspensio2 || 24-12-2018,
        fecha2Suspensio2: req.body.fecha2Suspensio2 || 24-12-2018
    })

    incidenciaLeve.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Algo esta ocurriendo con tu Incidencia Leve"
        });
    });
};



// Obtener todos los investigadores
exports.findLeve = (req,res) => {

        IncidenciaLeve.find({leve:"on"}).then(incidenciaLeve=>{
            res.send(incidenciaLeve);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || "Algo fue mal mientras los capturabamos a todos"
            });
        });

};

// Obtener todos los investigadores
exports.findGrave = (req,res) => {

    IncidenciaLeve.find({grave:"on"}).then(incidenciaLeve=>{
        res.send(incidenciaLeve);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Algo fue mal mientras los capturabamos a todos"
        });
    });

};


// Obtener un investigador por Id
exports.findOne = (req,res) => {
    IncidenciaLeve.findById(req.params.incidenciaLeveId)
    .then(incidenciaLeve=>{
        if (!incidenciaLeve){
            return res.status(404).send({
                message: "Incidencia NOT FOUND con ID " +req.params.incidenciaLeveId
            });
            }
            res.send(incidenciaLeve);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Incidencia no encontrado con ese id :" +req.params.incidenciaLeveId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.incidenciaLeveId
             });
        });
    };




// Actualizar un investigador
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Incidencia Leve vacia"
        });
    }

    // Find note and update it with the request body
    IncidenciaLeve.findByIdAndUpdate(req.params.incidenciaLeveId, {
        alumno: req.body.nombreAlumno || "Sin Nombre Alumno",
        profesor: req.body.nombreProfesor || "Sin Nombre Profesor",
        grupo: req.body.grupo || "Grupo Vacio",
        lugar: req.body.lugar || "Sin Lugar",
        fecha: req.body.horariFecha || 24-12-2018,
        horario: req.body.horariHora || 12,
        fechaIncidente: req.body.fechaIncidente || 24-12-2018,
        hora: req.body.hora || 12,
        textareaDescripcion: req.body.descripcion || "Sin Descripcion",
        inputRealitzacio: req.body.inputRealitzacio || "Vacio",
        fechaRealitzacio: req.body.fechaRealitzacio || 24-12-2018,
        horariRealitzacio: req.body.horariRealitzacio || 12,
        fechaSuspensio1: req.body.fechaSuspensio1 || 24-12-2018,
        fecha2riSuspensio1: req.body.horariSuspensio1 || 12,
        inputSuspensio2: req.body.inputSuspensio2 || "Vacio",
        fecha1Suspensio2: req.body.fecha1Suspensio2 || 24-12-2018,
        fecha2Suspensio2: req.body.fecha2Suspensio2 || 24-12-2018
    }, {new: true})
    .then(incidenciaLeve => {
        if(!incidenciaLeve) {
            return res.status(404).send({
                message: "Incidencia not found with id " + req.params.incidenciaLeveId
            });
        }
        res.send(incidenciaLeve);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Incidencia not found with id " + req.params.incidenciaLeveId
            });                
        }
        return res.status(500).send({
            message: "Error updating Incidencia con id " + req.params.incidenciaLeveId
        });
    });
};

// Borrar un investigador 
exports.delete = (req,res)=>{
    IncidenciaLeve.findByIdAndRemove(req.params.incidenciaLeveId)
    .then(incidenciaLeve => {
        if(!incidenciaLeve) {
            return res.status(404).send({
                message: "Incidencia no encontrada " + req.params.incidenciaLeveId
            });
        }
        res.send({message: "Incidencia eliminada !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Incidencia not found con id " + req.params.incidenciaLeveId
            });                
        }
        return res.status(500).send({
            message: "No podemos eliminar a esa Incidencia con id " + req.params.incidenciaLeveId
        });
    });
};
}