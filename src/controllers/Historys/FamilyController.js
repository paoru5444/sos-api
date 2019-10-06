const Family = require('../models/Family')

module.exports = {
    async index(req, res) {
      const family = await Family.find()
      return res.status(200).json(family)
    },

    async show(req, res) {
        const id = req.params.id
        const family = await Family.findById(id)
        return res.status(200).json(family)
      },

    async store(req, res) {
        const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
        if (queixa && duracao && intensidade && frequencia && melhora_piora) {
          const family = await Family.create(req.body)

          return res.status(200).json(family)
        } else {
            return res.send('Campos obrigatórios não preenchidos.')
        }
    },

    async update(req, res) {
        const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
        const id = req.params.id

        if (queixa && duracao && intensidade && frequencia && melhora_piora) {
          const family = await Family.findByIdAndUpdate({_id: id}, req.body)
          return res.status(200).json(family)
        } else {
            return res.send('Campos obrigatórios não preenchidos.')
        }
    },

    async destroy(req, res) {
        const id = req.params.id

        if (id) {
            await Family.findByIdAndDelete({_id: id})
            return res.send('Usuário deletado com sucesso.')
        } else {
            return res.status(404).send('Usuário não encontrado ou já deletado.')
        }
    }
}