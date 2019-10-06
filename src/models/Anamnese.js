const mongoose = require('mongoose')

const AnamneseSchema = new mongoose.Schema({
    queixa: String,
    duracao: String,
    intensidade: String,
    frequencia: String,
    melhora_piora: String,
})

module.exports = mongoose.model('Anamnese', AnamneseSchema)