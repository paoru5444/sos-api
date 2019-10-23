const Anamnese = require('../models/Anamnese')
const Alimentation = require('../models/Alimentation')
const Drugs = require('../models/Drugs')

const mongoose = require('mongoose')

module.exports = {
  async index(req, res) {
    const { userId } = req

    const anamnese = await Anamnese.find({ userId }).sort([['datcreatedAte', -1]])
    return res.status(200).send(anamnese)
  },

    async show(req, res) {
      const id = req.params.id

      const anamnese = await Anamnese.findById(id)
      return res.status(200).send(anamnese)
    },
 
    async store(req, res) {
      const { queixas, duracao, intensidade, frequencia } = req.body

      const {userId} = req

      if (queixas && duracao && intensidade && frequencia) {
        const anamnese = await Anamnese.create({...req.body, userId})
        return res.status(200).json(anamnese)
      } else {
        return res.send({ error: 'Campos obrigatórios não preenchidos.' })
      }
    },

    async update(req, res) {
        const id = req.params.id

        const anamnese = await Anamnese.findByIdAndUpdate({_id: id}, req.body)

        return res.status(200).json(anamnese)
    },

    async destroy(req, res) {
        const id = req.params.id

        if (id) {
            await Anamnese.findByIdAndDelete({_id: id})
            return res.send('Usuário deletado com sucesso.')
        } else {
            return res.status(404).send('Usuário não encontrado ou já deletado.')
        }
        
    }
}