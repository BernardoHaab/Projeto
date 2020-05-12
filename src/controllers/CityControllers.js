const connection = require("../connection");

module.exports = {
  async index(req, res) {
    const { idState } = req.body;

    if (idState) {
      await connection("city")
        .where("idState", idState)
        .select("idState", "name")
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    } else {
      await connection
        .select("idState", "name")
        .from("city")
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    }
  }

};
