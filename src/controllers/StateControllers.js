const connection = require("../connection");

module.exports = {
  async index(req, res) {
    await connection
      .select("*")
      .from("state")
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
};
