const routes = require('express').Router();

const EstudanteControllers = require('../src/controllers/EstudanteControllers');
const DocenteControllers = require('../src/controllers/DocenteControllers');
const EscolaControllers = require('../src/controllers/EscolaControllers');
const EstadoControllers = require('../src/controllers/EstadoControllers');
const MunicipioControllers = require('../src/controllers/MunicipioControllers');

routes.post('/estudante', EstudanteControllers.create);
routes.post('/docente', DocenteControllers.create);

routes.get('/escolas', EscolaControllers.index)

routes.get('/estados', EstadoControllers.index)
routes.get('/municipios', MunicipioControllers.index)


module.exports = routes;