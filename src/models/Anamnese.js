const mongoose = require('mongoose')

const AnamneseSchema = new mongoose.Schema({
    queixa: [String],
    duracao: String,
    intensidade: String,
    frequencia: String,
    melhora_piora: Boolean,
})

module.exports = mongoose.model('Anamnese', AnamneseSchema)