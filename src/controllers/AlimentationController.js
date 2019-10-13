const Alimentation = require('../models/Alimentation')

module.exports = {
  async index(req, res) {
    const alimentation = await Alimentation.find()
    return res.status(200).json(alimentation)
  },

  async store(req, res) {
    const { anamneseId } = req.body;
    const {userId} = req;

    if (userId && anamneseId) {
      const alimentation = await Alimentation.create({...req.body, userId})
      return res.status(200).json(alimentation)
    } else {
      return res.status(500).send('Entrada de dados inválida.')
    }
  }
}