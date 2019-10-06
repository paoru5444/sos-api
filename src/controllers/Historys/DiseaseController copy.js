const Disease = require('../models/Disease')

module.exports = {
    async index(req, res) {
      const disease = await Disease.find()
      return res.status(200).json(disease)
    },

    async show(req, res) {
        const id = req.params.id
        const disease = await Disease.findById(id)
        return res.status(200).json(disease)
      },

    async store(req, res) {
        const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
        if (queixa && duracao && intensidade && frequencia && melhora_piora) {
          const disease = await Disease.create(req.body)

          return res.status(200).json(disease)
        } else {
            return res.send('Campos obrigatórios não preenchidos.')
        }
    },

    async update(req, res) {
        const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
        const id = req.params.id

        if (queixa && duracao && intensidade && frequencia && melhora_piora) {
          const disease = await Disease.findByIdAndUpdate({_id: id}, req.body)
          return res.status(200).json(disease)
        } else {
            return res.send('Campos obrigatórios não preenchidos.')
        }
    },

    async destroy(req, res) {
        const id = req.params.id

        if (id) {
            await Disease.findByIdAndDelete({_id: id})
            return res.send('Usuário deletado com sucesso.')
        } else {
            return res.status(404).send('Usuário não encontrado ou já deletado.')
        }
    }
}