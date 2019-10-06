const Physiological = require('../models/Physiological')

module.exports = {
    async index(req, res) {
      const physiological = await Physiological.find()
      return res.status(200).json(physiological)
    },

    async show(req, res) {
        const id = req.params.id
        const physiological = await Physiological.findById(id)
        return res.status(200).json(physiological)
      },

    async store(req, res) {
        const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
        if (queixa && duracao && intensidade && frequencia && melhora_piora) {
          const physiological = await Physiological.create(req.body)

          return res.status(200).json(physiological)
        } else {
            return res.send('Campos obrigatórios não preenchidos.')
        }
    },

    async update(req, res) {
        const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
        const id = req.params.id

        if (queixa && duracao && intensidade && frequencia && melhora_piora) {
          const physiological = await Physiological.findByIdAndUpdate({_id: id}, req.body)
          return res.status(200).json(physiological)
        } else {
            return res.send('Campos obrigatórios não preenchidos.')
        }
    },

    async destroy(req, res) {
        const id = req.params.id

        if (id) {
            await Physiological.findByIdAndDelete({_id: id})
            return res.send('Usuário deletado com sucesso.')
        } else {
            return res.status(404).send('Usuário não encontrado ou já deletado.')
        }
    }
}