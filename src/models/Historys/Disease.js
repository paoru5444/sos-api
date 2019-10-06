const mongoose = require('mongoose')

const DiseaseSchema = new mongoose.Schema({
  userId: String,
  infecciosa: [String],
  alergica: [String],
  infancia: [String],
  sexual: [String],
  intoxicacao: [String],
  psiquica: [String],
})

module.exports = mongoose.model('Disease', DiseaseSchema)