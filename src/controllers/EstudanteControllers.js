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
      novaEscola = {
        nome,
        tipo,
      },
    } = req.body;

    if (novaEscola.nome != null && novaEscola.tipo != null && idEscola == 0) {
      const { nome, tipo } = novaEscola;
      const data = await EscolaControllers.create(nome, tipo);

      const { idEscola: novoID } = data;

      idEscola = novoID;
    }

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
