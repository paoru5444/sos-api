const mongoose = require('mongoose')

const HistorySchema = new mongoose.Schema({
    userId: String,
    disease: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Disease'
    },
    physiological: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Physiological'
    },
    family: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Family'
    },
    social: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Social'
    },
})

module.exports = mongoose.model('History', HistorySchema)