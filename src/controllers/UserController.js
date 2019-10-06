const User = require('../models/User')

module.exports = {
    async index(req, res) {
      const user = await User.find()
      return res.status(200).json(user)
    },

    async store(req, res) {
        const { name, email, password } = req.body

        if (name, email, password) {
          const user = await User.create(req.body)
          return res.status(200).json(user)
        }
    }
}