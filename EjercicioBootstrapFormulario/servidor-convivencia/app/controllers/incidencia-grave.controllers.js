const IncidenciaGrave = require('../models/incidencia-grave.models.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el Investigador
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Incidencia Vacía..." 
        });
    }

    const incidenciaGrave = new IncidenciaGrave({
        alumno: req.body.alumno || "Sin Nombre Alumno",
        profesor: req.body.profesor || "Sin Nombre Profesor",
        grupo: req.body.grupo || "Grupo Vacio",
        lugar: req.body.lugar || "Sin Lugar",
        fecha: req.body.fecha || 24-12-2018,
        horario: req.body.horario || 12,
        fechaIncidente: req.body.fechaIncidente || 24-12-2018,
        hora: req.body.hora || 12,
        textareaDescripcion: req.body.textaeaDescripcion || "Sin Descripcion",
    })

    incidenciaGrave.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Algo esta ocurriendo con tu Incidencia Grave"
        });
    });
};



// Obtener todos los investigadores
exports.findAll = (req,res) => {

        IncidenciaGrave.find().then(incidencias=>{
            res.send(incidencias);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || "Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un investigador por Id
exports.findOne = (req,res) => {
    IncidenciaGrave.findById(req.params.incidenciaGraveId)
    .then(incidenciaGrave=>{
        if (!incidenciaGrave){
            return res.status(404).send({
                message: "Incidencia Grave NOT FOUND con ID " +req.params.incidenciaGraveId
            });
            }
            res.send(incidenciaGrave);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Incidencia Grave no encontrado con ese id :" +req.params.incidenciaGraveId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.incidenciaGraveId
             });
        });
    };




// Actualizar un investigador
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Incidencia Grave vacia"
        });
    }

    // Find note and update it with the request body
    IncidenciaGrave.findByIdAndUpdate(req.params.incidenciaGraveId, {
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
    .then(incidenciaGrave => {
        if(!incidenciaGrave) {
            return res.status(404).send({
                message: "Incidencia Grave not found with id " + req.params.incidenciaGraveId
            });
        }
        res.send(incidenciaGrave);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Incidencia Grave not found with id " + req.params.incidenciaGraveId
            });                
        }
        return res.status(500).send({
            message: "Error updating Incidencia Grave con id " + req.params.incidenciaGraveId
        });
    });
};

// Borrar un investigador 
exports.delete = (req,res)=>{
    IncidenciaGrave.findByIdAndRemove(req.params.incidenciaGraveId)
    .then(incidenciaGrave => {
        if(!incidenciaGrave) {
            return res.status(404).send({
                message: "Incidencia Grave no encontrada " + req.params.incidenciaGraveId
            });
        }
        res.send({message: "Incidencia Grave eliminada !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Incidencia Grave not found con id " + req.params.incidenciaGraveId
            });                
        }
        return res.status(500).send({
            message: "No podemos eliminar a esa Incidencia Grave con id " + req.params.incidenciaGraveId
        });
    });
};