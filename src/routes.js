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
const RecomendationController = require('./controllers/RecomendationController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/register', AuthController.register )
routes.post('/authenticate', AuthController.authenticate )

routes.get('/users', UserController.index )
routes.post('/users', UserController.store )

routes.use(authMiddleware)

routes.put('/users', UserController.update )

routes.get('/anamnese', AnamneseController.index )
routes.get('/anamnese/:id', AnamneseController.show )
routes.post('/anamnese', AnamneseController.store )
routes.put('/anamnese/:id', AnamneseController.update )
routes.delete('/anamnese/:id', AnamneseController.destroy )

routes.get('/history', HistoryController.show )
routes.post('/history', HistoryController.store )

routes.get('/drugs', DrugsController.index )
routes.get('/drugs/:id', DrugsController.show )
routes.post('/drugs', DrugsController.store )

routes.get('/alimentation', AlimentationController.index )
routes.get('/alimentation/:id', AlimentationController.show )
routes.post('/alimentation', AlimentationController.store )

routes.get('/recomendation', RecomendationController.index )
routes.get('/recomendation/:id', RecomendationController.show )
routes.post('/recomendation', RecomendationController.store )

module.exports = routes