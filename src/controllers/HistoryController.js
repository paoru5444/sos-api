const History = require('../models/History')
const Disease = require('../models/Historys/Disease')
const Family = require('../models/Historys/Family')
const Social = require('../models/Historys/Social')
const Physiological = require('../models/Historys/Physiological')

module.exports = {
    async index(req, res) {
      const history = await History.find()
      return res.status(200).json(history)
    },

    async show(req, res) {
      const userId = req.userId
      const history = await History.find({ userId })
      // const disease = await Disease.find({ userId: id }) || {}
      // const family = await Family.find({ userId: id }) || {}
      // const social = await Social.find({ userId: id }) || {}
      // const physiological = await Physiological.find({ userId: id }) || {}
      // await history.populate('disease').execPopulate();
      return res.status(200).json({
       history
      })
    },

    async store(req, res) {
        const { disease, family, physiological, social } = req.body
        const { infecciosa, alergica, infancia, sexual, intoxicacao, psiquica} = disease
        const { diabetes, cancer, avc, vicio, depressao, hipertensao, outros} = family
        const userId = req.userId

        const diseaseCreation = await Disease.create({ 
          userId,
          infecciosa: infecciosa.split(',').map(string => string.trim()),
          alergica: alergica.split(',').map(string => string.trim()),
          infancia: infancia.split(',').map(string => string.trim()),
          sexual: sexual.split(',').map(string => string.trim()),
          intoxicacao: intoxicacao.split(',').map(string => string.trim()),
          psiquica: psiquica.split(',').map(string => string.trim()),
        })

        const familyCreation = await Family.create({
          userId,
          diabetes: diabetes.split(',').map(string => string.trim()),
          cancer: cancer.split(',').map(string => string.trim()),
          avc: avc.split(',').map(string => string.trim()),
          vicio: vicio.split(',').map(string => string.trim()),
          depressao: depressao.split(',').map(string => string.trim()),
          hipertensao: hipertensao.split(',').map(string => string.trim()),
          outros: outros.split(',').map(string => string.trim()),
        })

        const socialCreation = await Social.create({
          userId, social,
          social: {...social, ...social.atividade_fisica.map(string => string.trim())}
        })

        const physiologicalCreation = await Physiological.create({
          userId,
          physiological: {
            ...physiological,
            ...physiological.homem.split(',').map(string => string.trim()),
            ...physiological.mulher.split(',').map(string => string.trim()),
            ...physiological.atividade_sexual.split(',').map(string => string.trim()),
          },
        })

        const history = await History.create({
          userId,
          disease: diseaseCreation._id,
          family: familyCreation._id,
          social: socialCreation._id,
          physiological: physiologicalCreation._id,
        })

        await history
          .populate('disease')
          .populate('family')
          .populate('social')
          .populate('physiological')
          .execPopulate();

        return res.send({ userId, history })
    },

    async update(req, res) {
        const { queixa, duracao, intensidade, frequencia, melhora_piora } = req.body
        const id = req.params.id

        if (queixa && duracao && intensidade && frequencia && melhora_piora) {
          const history = await History.findByIdAndUpdate({_id: id}, req.body)
          return res.status(200).json(history)
        } else {
            return res.send('Campos obrigatórios não preenchidos.')
        }
    },

    async destroy(req, res) {
        const id = req.params.id

        if (id) {
            await History.findByIdAndDelete({_id: id})
            return res.send('Usuário deletado com sucesso.')
        } else {
            return res.status(404).send('Usuário não encontrado ou já deletado.')
        }
    }
}