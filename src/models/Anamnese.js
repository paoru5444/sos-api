const mongoose = require('mongoose')

const AnamneseSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  userId: String,
  queixa: [String],
  duracao: String,
  intensidade: String,
  frequencia: String,
  melhora_piora: Boolean,
})

module.exports = mongoose.model('Anamnese', AnamneseSchema)