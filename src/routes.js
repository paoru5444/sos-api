const express = require('express')
const authMiddleware = require('./middleware/auth')

const multer = require('multer')
const uploadConfig = require('./config/upload')

const UserController = require('./controllers/UserController')
const AnamneseController = require('./controllers/AnamneseController')
const AuthController = require('./controllers/AuthController')
const HistoryController = require('./controllers/HistoryController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/register', AuthController.register )
routes.post('/authenticate', AuthController.authenticate )

routes.get('/users', UserController.index )
routes.post('/users', UserController.store )

routes.get('/anamnese', AnamneseController.index )
routes.get('/anamnese/:id', AnamneseController.show )
routes.post('/anamnese', AnamneseController.store )
routes.put('/anamnese/:id', AnamneseController.update )
routes.delete('/anamnese/:id', AnamneseController.destroy )

routes.use(authMiddleware)
routes.get('/history', HistoryController.show )
routes.post('/history', HistoryController.store )

module.exports = routes