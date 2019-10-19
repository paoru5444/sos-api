const Alimentation = require('../models/Alimentation')

module.exports = {
  async index(req, res) {
    const alimentation = await Alimentation.find()
    return res.status(200).json(alimentation)
  },
  async show(req, res) {
    const anamneseId = req.params.id

    const alimentation = await Alimentation.find({ anamneseId })

    if(alimentation.length === 0) return res.status(404).send('Nenhuma alimentação registrada')

    return res.status(200).json(alimentation)
  },
  async store(req, res) {
    const { name } = req.body;
    const {userId} = req;

    if ( name ) {
      const alimentation = await Alimentation.create({...req.body, userId})
      return res.status(200).json(alimentation)
    } else {
      return res.status(500).send('Entrada de dados inválida.')
    }
  }
}