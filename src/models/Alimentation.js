const mongoose = require('mongoose')

const AlimentationSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  userId: String,
  anamneseId: String,
  name: String,
  description: String,
})

module.exports = mongoose.model('Alimentation', AlimentationSchema)