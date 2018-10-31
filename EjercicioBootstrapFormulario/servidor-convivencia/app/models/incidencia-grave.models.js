const mongoose= require('mongoose');

const IncidenciaGraveSchema = mongoose.Schema({
    alumno:String,
    profesor:String,
    grupo:String,
    lugar:String,
    fecha:Date,
    horario:Date,
    fechaIncidente:Date,
    hora:Date,
    textareaDescripcion:String,
    radio:String,
    textareaTipificacioGrave:String,
    cbTipificacioGrave1:String,
    cbTipificacioGrave2:String,
    cbTipificacioGrave3:String,
    cbTipificacioGrave4:String,
    cbTipificacioGrave5:String,
    cbTipificacioGrave6:String,
    cbTipificacioGrave7:String,
    cbTipificacioGrave8:String,
    cbTipificacioGrave9:String,
    cbTipificacioGrave10:String,
    cbTipificacioGrave11:String,
    cbTipificacioGrave12:String,
    cbTipificacioGrave13:String,
    cbTipificacioGrave14:String,
    cbTipificacioGrave15:String,
    cbTipificacioGrave16:String
},{
    timestamps:true
});


module.exports = mongoose.model('Incidencia-Grave',IncidenciaGraveSchema);