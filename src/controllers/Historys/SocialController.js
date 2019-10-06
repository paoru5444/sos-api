const Social = require('../models/Social')

module.exports = {
    async index(req, res) {
      const social = await Social.find()
      return res.status(200).json(social)
    },

    async show(req, res) {
        const id = req.params.id
        const social = await Social.findById(id)
        return res.status(200).json(social)
      },

    async store(req, res) {
        const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
        if (queixa && duracao && intensidade && frequencia && melhora_piora) {
          const social = await Social.create(req.body)

          return res.status(200).json(social)
        } else {
            return res.send('Campos obrigatórios não preenchidos.')
        }
    },

    async update(req, res) {
        const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
        const id = req.params.id

        if (queixa && duracao && intensidade && frequencia && melhora_piora) {
          const social = await Social.findByIdAndUpdate({_id: id}, req.body)
          return res.status(200).json(social)
        } else {
            return res.send('Campos obrigatórios não preenchidos.')
        }
    },

    async destroy(req, res) {
        const id = req.params.id

        if (id) {
            await Social.findByIdAndDelete({_id: id})
            return res.send('Usuário deletado com sucesso.')
        } else {
            return res.status(404).send('Usuário não encontrado ou já deletado.')
        }
    }
}