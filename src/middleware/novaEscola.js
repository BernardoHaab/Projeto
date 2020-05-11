const connection = require("../connection");
const EscolaControllers = require("../controllers/EscolaControllers");

module.exports = async function novaEscola(req, res, next) {
  let {
    idEscola,
    novaEscola = {
      nome,
      tipo,
    },
  } = req.body;

  const { nome, tipo } = novaEscola;

  if (nome != null && tipo != null && idEscola == 0) {
    await connection("escola").insert({
      nome,
      tipo,
    });

    await connection("escola")
      .where({
        nome: nome,
        tipo: tipo,
      })
      .first("idEscola")
      .then((data) => {
        const { idEscola: novoId } = data;

        req.body.idEscola = novoId;
        next();
      })
      .catch((err) => console.log(err));
  }
};
