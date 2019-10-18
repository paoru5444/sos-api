const mongoose = require('mongoose')

const AnamneseSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  userId: String,
  queixas: [String],
  duracao: String,
  intensidade: String,
  frequencia: String,
  localizacao: [String],
})

module.exports = mongoose.model('Anamnese', AnamneseSchema)