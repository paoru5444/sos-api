const mongoose = require('mongoose')

const FamilySchema = new mongoose.Schema({
    userId: String,
    diabetes: [String],
    cancer: [String],
    avc: [String],
    vicio: [String],
    depressao: [String],
    hipertensao: [String],
    outros: [String],
})

module.exports = mongoose.model('Family', FamilySchema)