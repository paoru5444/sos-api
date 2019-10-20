const Recomendation = require('../models/Recomendation')

module.exports = {
  async index(req, res) {
    const recomendation = await Recomendation.find()
    return res.status(200).json(recomendation)
  },
  async show(req, res) {
    const anamneseId = req.params.id

    const recomendation = await Recomendation.find({ anamneseId })

    if(recomendation.length === 0) return res.status(404).send('Nenhuma recomendação encontrada')

    return res.status(200).json(recomendation)
  },
  async store(req, res) {
    const {userId} = req;

    const recomendation = await Recomendation.create({...req.body, userId})
    return res.status(200).json(recomendation)
  }
}