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
