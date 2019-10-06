const mongoose = require('mongoose')

const SocialSchema = new mongoose.Schema({
  userId: String,
  tabagismo: Boolean,
  ex_fumante: Boolean,
  tempo_tabagismo: String,
  alcool: Boolean,
  tempo_alcool: Boolean,
  atividade_fisica: [String],
  atividade_periodicidade: String,
})

module.exports = mongoose.model('Social', SocialSchema)