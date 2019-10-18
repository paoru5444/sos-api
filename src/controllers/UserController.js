const User = require('../models/User')

module.exports = {
    async index(req, res) {
      const user = await User.find()
      return res.status(200).json(user)
    },

    async store(req, res) {
      const { name, email, password, carteiraVascina, telefoneEmergencia, tipoSanguineo } = req.body

      if (name, email, password) {
        const user = await User.create(req.body)
        return res.status(200).json(user)
      }
    },
    async update(req, res) {
      const { name, carteiraVascina, telefoneEmergencia, tipoSanguineo } = req.body
      const {userId} = req

      if (name, carteiraVascina, telefoneEmergencia, tipoSanguineo) {
        const user = await User.findByIdAndUpdate({_id: userId}, req.body)
        return res.status(200).json(user)
      } else{
        return res.send('Campos obrigatórios não preenchidos.')
      }
    }
}