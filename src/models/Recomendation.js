const mongoose = require('mongoose')

const RecomendationSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  userId: String,
  anamneseId: String,
  recomendation: String,
})

module.exports = mongoose.model('Recomendation', RecomendationSchema)