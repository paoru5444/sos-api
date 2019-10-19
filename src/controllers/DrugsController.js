const Drugs = require('../models/Drugs')

module.exports = {
  async index(req, res) {
    const drugs = await Drugs.find()
    return res.status(200).json(drugs)
  },
  async show(req, res) {
    const anamneseId = req.params.id

    const drugs = await Drugs.find({ anamneseId })

    if(drugs.length === 0) return res.status(404).send('Nenhuma queixa encontrada')

    return res.status(200).json(drugs)
  },
  async store(req, res) {
    const { anamneseId, description, name, useMode,  } = req.body;
    const {userId} = req;

    if ( name ) {
      const drugs = await Drugs.create({...req.body, userId})
      return res.status(200).json(drugs)
    } else {
      return res.status(500).send('Entrada de dados inválida.')
    }
  }
}