const Alimentation = require('../models/Alimentation')

module.exports = {
  async index(req, res) {
    const alimentation = await Alimentation.find()
    return res.status(200).json(alimentation)
  },

  async store(req, res) {
    const { anamneseId, name, avoidAliment, description, foodType } = req.body;
    const {userId} = req;

    if ( anamneseId && name && foodType && description && (avoidAliment === false || avoidAliment === true)  ) {
      const alimentation = await Alimentation.create({...req.body, userId})
      return res.status(200).json(alimentation)
    } else {
      return res.status(500).send('Entrada de dados inválida.')
    }
  }
}