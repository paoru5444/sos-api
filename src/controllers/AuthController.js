const User = require('../models/User')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth')

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 186400,
  })
}

module.exports = {
  async register(req, res) {
    const { name, email } = req.body
      
    try {

      const hasUser = await User.findOne({email})
      
      if(hasUser) {
        return res.status(400).send({error: 'Usuário já existente' })
      }

      if(name && email) {
        const user = await User.create(req.body)
        
        user.password = undefined;

        return res.send({
          user,
          token: generateToken({ id: user.id })
        })
      } else {
        return res.status(400).send({error: 'Campos obrigatórios não preenchidos' })
      }
    } catch(error) {
      return res.status(400).send({error: 'Cadastro falhou'})
    }
  },

  async authenticate(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({email}).select('+password')

    if (!user) {
      return res.status(400).send({error: 'Usuário não encontrado'})
    }
    
    if(!await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Senha inválida'})
    }
    
    user.password = undefined;

    res.send({ user, token: generateToken({ id: user.id }) })
  }
}