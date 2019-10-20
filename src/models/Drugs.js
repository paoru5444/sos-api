const mongoose = require('mongoose')

const DrougsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  userId: String,
  anamneseId: String,
  name: String,
  useMode: String,
  period: String,
  dosage: String,
})

module.exports = mongoose.model('Drugs', DrougsSchema)