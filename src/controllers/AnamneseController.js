const Anamnese = require('../models/Anamnese')
const Alimentation = require('../models/Alimentation')
const Drugs = require('../models/Drugs')

const mongoose = require('mongoose')

module.exports = {
    async show(req, res) {
      const { userId } = req

      const anamnese = await Anamnese.find({ userId })
      return res.status(200).send(anamnese)
    },
 
    async store(req, res) {
      const { queixa, duracao, intensidade, frequencia, melhora_piora, crmMedico } = req.body

      const {userId} = req

      if (queixa && duracao && intensidade && frequencia && melhora_piora && crmMedico) {
        const anamnese = await Anamnese.create({...req.body, userId})
        return res.status(200).json(anamnese)
      } else {
        return res.send({ error: 'Campos obrigatórios não preenchidos.' })
      }
    },

    async update(req, res) {
        const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
        const id = req.params.id

        if (queixa && duracao && intensidade && frequencia && melhora_piora) {
          const anamnese = await Anamnese.findByIdAndUpdate({_id: id}, req.body)
          return res.status(200).json(anamnese)
        } else {
            return res.send('Campos obrigatórios não preenchidos.')
        }
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