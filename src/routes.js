const routes = require("express").Router();
const { celebrate, Joi, Segments, errors } = require("celebrate");
const novaEscola = require("./middleware/novaEscola");

const EstudanteControllers = require("../src/controllers/EstudanteControllers");
const DocenteControllers = require("../src/controllers/DocenteControllers");
const EscolaControllers = require("../src/controllers/EscolaControllers");
const EstadoControllers = require("../src/controllers/EstadoControllers");
const MunicipioControllers = require("../src/controllers/MunicipioControllers");

routes.post(
  "/estudante",
  novaEscola,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().required(),
      idEstado: Joi.number().min(1).max(4).required(),
      idMunicipio: Joi.number().min(1).max(11).required(),
      idEscola: Joi.number().min(1).required(),
      idSerie: Joi.number().min(1).max(6).required(),
      fotoUrl: Joi.string(),
      fotoKey: Joi.string(),
      novaEscola: {
        nome: Joi.string(),
        tipo: Joi.boolean(),
      },
    }),
  }),
  EstudanteControllers.create
);
routes.post(
  "/docente",
  novaEscola,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().required(),
      formacao: Joi.string().required(),
      idEstado: Joi.number().min(1).max(4).required(),
      idMunicipio: Joi.number().min(1).max(11).required(),
      idEscola: Joi.number().min(1).required(),
      fotoUrl: Joi.string(),
      fotoKey: Joi.string(),
      novaEscola: {
        nome: Joi.string(),
        tipo: Joi.boolean(),
      },
    }),
  }),
  DocenteControllers.create
);

routes.get("/escolas", celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string(),
    })
}) ,EscolaControllers.index);

routes.get("/estados", EstadoControllers.index);
routes.get("/municipios", celebrate({
    [Segments.BODY]: Joi.object().keys({
        idEstado: Joi.number().min(1).max(4).required(),
    })
}) ,MunicipioControllers.index);

module.exports = routes;
