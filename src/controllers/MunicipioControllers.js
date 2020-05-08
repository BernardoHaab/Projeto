const connection = require("../connection");

module.exports = {
  async index(req, res) {
    const { idEstado } = req.body;

    if (idEstado) {
      await connection("municipio")
        .where("idEstado", idEstado)
        .select("idEstado", "nome")
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    } else {
      await connection
        .select("idEstado", "nome")
        .from("municipio")
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    }
  }

};
