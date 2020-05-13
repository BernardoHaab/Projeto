const connection = require("../connection");

module.exports = {
  async create(req, res) {
    const { email, password } = req.body;

    let info;

    await connection("student")
      .where({
        email: email,
        password: password,
      })
      .first("idStudent", "name", "photoURL", "photoKey")
      .then((data) => {
        info = data;
      });

    if (!info) {
      await connection("teacher")
        .where({
          email: email,
          password: password,
        })
        .first("idTeacher", "name", "photoURL", "photoKey")
        .then((data) => {
          info = data;
        });
    }

    return res.json(info)
  },
};
