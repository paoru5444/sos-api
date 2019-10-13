const Anamnese = require('../models/Anamnese')

module.exports = {
    async index(req, res) {
      const anamnese = await Anamnese.find()
      return res.status(200).json(anamnese)
    },

    async show(req, res) {
        const id = req.params.id
        const anamnese = await Anamnese.findById(id)
        return res.status(200).json(anamnese)
      },

    async store(req, res) {
      const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
      const userId = req.userId
      console.log(userId)
      if (queixa && duracao && intensidade && frequencia && melhora_piora) {
        const anamnese = await Anamnese.create({
          userId, queixa, duracao, intensidade, frequencia, melhora_piora
        })

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