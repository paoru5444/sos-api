const mongoose = require('mongoose')

const PhysiologicalSchema = new mongoose.Schema({
    userId: String,
    homem: [String],
    mulher: [String],
    atividade_sexual: [String],
    numero_parceiros: Number,
})

module.exports = mongoose.model('Physiological', PhysiologicalSchema)