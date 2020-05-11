const connection = require("../connection");
const EscolaControllers = require("./EscolaControllers");
const generateUniqueId = require("../utils/generateUniqId");

/**
 * **** TODO *****
 * -> Update
 * -> Delete
 */

module.exports = {
  async create(req, res) {
    let {
      nome,
      email,
      senha,
      idEstado,
      idMunicipio,
      idEscola,
      idSerie,
      fotoUrl,
      fotoKey,
    } = req.body;

    const idEstudante = generateUniqueId();
    
    try {
      await connection("estudante").insert({
        idEstudante,
        nome,
        email,
        senha,
        idEstado,
        idMunicipio,
        idEscola,
        idSerie,
        fotoUrl,
        fotoKey,
      });

      return res.send();
      
    } catch (error) {

      return res.json(error);
    }
  },
};
