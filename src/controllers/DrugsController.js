const Drugs = require('../models/Drugs')

module.exports = {
  async index(req, res) {
    const drugs = await Drugs.find()
    return res.status(200).json(drugs)
  },

  async store(req, res) {
    const { anamneseId, description, name, useMode,  } = req.body;
    const {userId} = req;

    if (anamneseId && description && name && useMode) {
      const drugs = await Drugs.create({...req.body, userId})
      return res.status(200).json(drugs)
    } else {
      return res.status(500).send('Entrada de dados inválida.')
    }
  }
}