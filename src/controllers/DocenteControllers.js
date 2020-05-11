const connection = require('../connection');
const EscolaControllers = require('./EscolaControllers');
const generateUniqueId = require("../utils/generateUniqId");


module.exports = {
  async create(req, res) {
    let {
      nome,
      email,
      senha,
      formacao,
      idEstado,
      idMunicipio,
      idEscola,
      fotoUrl,
      fotoKey,
    } = req.body;
    
    const idDocente = generateUniqueId();

    try {
      await connection("docente").insert({
        idDocente,
        nome,
        email,
        senha,
        formacao,
        idEstado,
        idMunicipio,
        idEscola,
        fotoUrl,
        fotoKey,
      });

      return res.send();
    } catch (error) {
      return res.json(error)
    }

  },
};
