const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        required: true,
        select: false,
    },
    carteiraVascina: String,
    telefoneEmergencia: [String],
    tipoSanguineo: String,
})


UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

module.exports = mongoose.model('User', UserSchema)