const express = require('express')
const authMiddleware = require('./middleware/auth')

const multer = require('multer')
const uploadConfig = require('./config/upload')

const UserController = require('./controllers/UserController')
const AnamneseController = require('./controllers/AnamneseController')
const AuthController = require('./controllers/AuthController')
const HistoryController = require('./controllers/HistoryController')
const DrugsController = require('./controllers/DrugsController')
const AlimentationController = require('./controllers/AlimentationController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/register', AuthController.register )
routes.post('/authenticate', AuthController.authenticate )

routes.get('/users', UserController.index )
routes.post('/users', UserController.store )

routes.use(authMiddleware)

routes.get('/anamnese/show', AnamneseController.show )
routes.post('/anamnese', AnamneseController.store )
routes.put('/anamnese/:id', AnamneseController.update )
routes.delete('/anamnese/:id', AnamneseController.destroy )

routes.get('/history', HistoryController.show )
routes.post('/history', HistoryController.store )

routes.get('/drugs', DrugsController.index )
routes.post('/drugs', DrugsController.store )

routes.get('/alimentation', AlimentationController.index )
routes.post('/alimentation', AlimentationController.store )

module.exports = routes