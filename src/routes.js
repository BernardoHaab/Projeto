const routes = require("express").Router();
const { celebrate, Joi, Segments, errors } = require("celebrate");
const NewSchool = require("./middleware/NewSchool");

const StudentControllers = require("./controllers/StudentControllers");
const TeacherControllers = require("./controllers/TeacherControllers");
const SchoolControllers = require("./controllers/SchoolControllers");
const StateControllers = require("./controllers/StateControllers");
const CityControllers = require("./controllers/CityControllers");
const SessionControllers = require("./controllers/SessionControllers");

routes.post("/student",NewSchool,celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      idState: Joi.number().min(1).max(4).required(),
      idCity: Joi.number().min(1).max(11).required(),
      idSchool: Joi.number().min(1).required(),
      idGrade: Joi.number().min(1).max(6).required(),
      photoURL: Joi.string(),
      photoKey: Joi.string(),
      newSchool: {
        name: Joi.string(),
        type: Joi.boolean(),
      },
    }),
  }), StudentControllers.create
);
routes.post("/teacher", NewSchool,celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      formation: Joi.string().required(),
      idState: Joi.number().min(1).max(4).required(),
      idCity: Joi.number().min(1).max(11).required(),
      idSchool: Joi.number().min(1).required(),
      photoURL: Joi.string(),
      photoKey: Joi.string(),
      newSchool: {
        name: Joi.string(),
        type: Joi.boolean(),
      },
    }),
  }), TeacherControllers.create
);

routes.get("/school", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string(),
    })
}), SchoolControllers.index);

routes.get("/state", StateControllers.index);
routes.get("/city", celebrate({
    [Segments.BODY]: Joi.object().keys({
        idState: Joi.number().min(1).max(4).required(),
    })
}), CityControllers.index);

routes.post('/session', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
}) , SessionControllers.creat)

module.exports = routes;
