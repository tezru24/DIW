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
    
    const incidenciaLeve = new IncidenciaLeve({
        alumno: req.body.alumno || "Sin Nombre Alumno",
        profesor: req.body.profesor || "Sin Nombre Profesor",
        grupo: req.body.grupo || "Grupo Vacio",
        lugar: req.body.lugar || "Sin Lugar",
        fecha: req.body.fecha || 24-12-2018,
        horario: req.body.horario || 12,
        fechaIncidente: req.body.fechaIncidente || 24-12-2018,
        hora: req.body.hora || 12,
        leve:req.body.leve,
        grave:req.body.grave,
        dias:req.body.dias,
        textareaDescripcion: req.body.textareaDescripcion || "Sin Descripcion",
        inputRealitzacio: req.body.inputRealitzacio || "Vacio",
        fechaRealitzacio: req.body.fechaRealitzacio || 24-12-2018,
        horariRealitzacio: req.body.horariRealitzacio || 12,
        fechaSuspensio1: req.body.fechaSuspensio1 || 24-12-2018,
        fecha2Suspensio1: req.body.fecha2Suspensio1 || 12,
        inputSuspensio2: req.body.inputSuspensio2 || "Vacio",
        fecha1Suspensio2: req.body.fecha1Suspensio2 || 24-12-2018,
        fecha2Suspensio2: req.body.fecha2Suspensio2 || 24-12-2018,
        cbCompareixença:req.body.cbCompareixença,
        cbRetirada:req.body.cbRetirada,
        cbPrivacio:req.body.cbPrivacio,
        cbRealitzacio:req.body.cbRealitzacio,
        cbSuspensio1:req.body.cbSuspensio1,
        cbSuspensio2:req.body.cbSuspensio2,
        cbTipificacioLeve1:req.body.cbTipificacioLeve1,
        cbTipificacioLeve2:req.body.cbTipificacioLeve2,
        cbTipificacioLeve3:req.body.cbTipificacioLeve3,
        cbTipificacioLeve4:req.body.cbTipificacioLeve4,
        cbTipificacioLeve5:req.body.cbTipificacioLeve5,
        cbTipificacioLeve6:req.body.cbTipificacioLeve6,
        cbTipificacioLeve7:req.body.cbTipificacioLeve7,
        cbTipificacioLeve8:req.body.cbTipificacioLeve8,
        cbTipificacioLeve9:req.body.cbTipificacioLeve9,
        cbTipificacioLeve10:req.body.cbTipificacioLeve10,
        cbTipificacioLeve11:req.body.cbTipificacioLeve11,
        cbTipificacioLeve12:req.body.cbTipificacioLeve12,
        cbTipificacioLeve13:req.body.cbTipificacioLeve13,
        cbTipificacioLeve14:req.body.cbTipificacioLeve14,
        cbTipificacioLeve15:req.body.cbTipificacioLeve15,
        cbTipificacioLeve16:req.body.cbTipificacioLeve16,
        cbTipificacioLeve17:req.body.cbTipificacioLeve17,
        cbTipificacioLeve18:req.body.cbTipificacioLeve18,
        cbTipificacioLeve19:req.body.cbTipificacioLeve19,
        cbTipificacioGrave1:req.body.cbTipificacioGrave1,
        cbTipificacioGrave2:req.body.cbTipificacioGrave2,
        cbTipificacioGrave3:req.body.cbTipificacioGrave3,
        cbTipificacioGrave4:req.body.cbTipificacioGrave4,
        cbTipificacioGrave5:req.body.cbTipificacioGrave5,
        cbTipificacioGrave6:req.body.cbTipificacioGrave6,
        cbTipificacioGrave7:req.body.cbTipificacioGrave7,
        cbTipificacioGrave8:req.body.cbTipificacioGrave8,
        cbTipificacioGrave9:req.body.cbTipificacioGrave9,
        cbTipificacioGrave10:req.body.cbTipificacioGrave10,
        cbTipificacioGrave11:req.body.cbTipificacioGrave11,
        cbTipificacioGrave12:req.body.cbTipificacioGrave12,
        cbTipificacioGrave13:req.body.cbTipificacioGrave13,
        cbTipificacioGrave14:req.body.cbTipificacioGrave14,
        cbTipificacioGrave15:req.body.cbTipificacioGrave15,
        cbTipificacioGrave16:req.body.cbTipificacioGrave16
    })

    incidenciaLeve.save().then(data =>{
        res.redirect("menu-principal.html");
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Algo esta ocurriendo con tu Incidencia Leve"
        });
    });
};

exports.findAll = (req,res) => {

    IncidenciaLeve.find().then(incidenciaLeve=>{
        res.send(incidenciaLeve);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
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
        alumno: req.body.alumno || "Sin Nombre Alumno",
        profesor: req.body.profesor || "Sin Nombre Profesor",
        grupo: req.body.grupo || "Grupo Vacio",
        lugar: req.body.lugar || "Sin Lugar",
        fecha: req.body.fecha || 24-12-2018,
        horario: req.body.horario || 12,
        fechaIncidente: req.body.fechaIncidente || 24-12-2018,
        hora: req.body.hora || 12,
        leve:req.body.leve,
        grave:req.body.grave,
        textareaDescripcion: req.body.textareaDescripcion || "Sin Descripcion",
        inputRealitzacio: req.body.inputRealitzacio || "Vacio",
        fechaRealitzacio: req.body.fechaRealitzacio || 24-12-2018,
        horariRealitzacio: req.body.horariRealitzacio || 12,
        fechaSuspensio1: req.body.fechaSuspensio1 || 24-12-2018,
        fecha2Suspensio1: req.body.fecha2Suspensio1 || 12,
        inputSuspensio2: req.body.inputSuspensio2 || "Vacio",
        fecha1Suspensio2: req.body.fecha1Suspensio2 || 24-12-2018,
        fecha2Suspensio2: req.body.fecha2Suspensio2 || 24-12-2018,
        cbCompareixença:req.body.cbCompareixença,
        cbRetirada:req.body.cbRetirada,
        cbPrivacio:req.body.cbPrivacio,
        cbRealitzacio:req.body.cbRealitzacio,
        cbSuspensio1:req.body.cbSuspensio1,
        cbSuspensio2:req.body.cbSuspensio2,
        cbTipificacioLeve1:req.body.cbTipificacioLeve1,
        cbTipificacioLeve2:req.body.cbTipificacioLeve2,
        cbTipificacioLeve3:req.body.cbTipificacioLeve3,
        cbTipificacioLeve4:req.body.cbTipificacioLeve4,
        cbTipificacioLeve5:req.body.cbTipificacioLeve5,
        cbTipificacioLeve6:req.body.cbTipificacioLeve6,
        cbTipificacioLeve7:req.body.cbTipificacioLeve7,
        cbTipificacioLeve8:req.body.cbTipificacioLeve8,
        cbTipificacioLeve9:req.body.cbTipificacioLeve9,
        cbTipificacioLeve10:req.body.cbTipificacioLeve10,
        cbTipificacioLeve11:req.body.cbTipificacioLeve11,
        cbTipificacioLeve12:req.body.cbTipificacioLeve12,
        cbTipificacioLeve13:req.body.cbTipificacioLeve13,
        cbTipificacioLeve14:req.body.cbTipificacioLeve14,
        cbTipificacioLeve15:req.body.cbTipificacioLeve15,
        cbTipificacioLeve16:req.body.cbTipificacioLeve16,
        cbTipificacioLeve17:req.body.cbTipificacioLeve17,
        cbTipificacioLeve18:req.body.cbTipificacioLeve18,
        cbTipificacioLeve19:req.body.cbTipificacioLeve19,
        cbTipificacioGrave1:req.body.cbTipificacioGrave1,
        cbTipificacioGrave2:req.body.cbTipificacioGrave2,
        cbTipificacioGrave3:req.body.cbTipificacioGrave3,
        cbTipificacioGrave4:req.body.cbTipificacioGrave4,
        cbTipificacioGrave5:req.body.cbTipificacioGrave5,
        cbTipificacioGrave6:req.body.cbTipificacioGrave6,
        cbTipificacioGrave7:req.body.cbTipificacioGrave7,
        cbTipificacioGrave8:req.body.cbTipificacioGrave8,
        cbTipificacioGrave9:req.body.cbTipificacioGrave9,
        cbTipificacioGrave10:req.body.cbTipificacioGrave10,
        cbTipificacioGrave11:req.body.cbTipificacioGrave11,
        cbTipificacioGrave12:req.body.cbTipificacioGrave12,
        cbTipificacioGrave13:req.body.cbTipificacioGrave13,
        cbTipificacioGrave14:req.body.cbTipificacioGrave14,
        cbTipificacioGrave15:req.body.cbTipificacioGrave15,
        cbTipificacioGrave16:req.body.cbTipificacioGrave16
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
