const connection = require('../connection');
const generateUniqueId = require("../utils/generateUniqId");


module.exports = {
  async create(req, res) {
    let {
      name,
      email,
      password,
      formation,
      idState,
      idCity,
      idSchool,
      photoURL,
      photoKey,
    } = req.body;
    
    const idTeacher = generateUniqueId();

    try {
      await connection("teacher").insert({
        idTeacher,
        name,
        email,
        password,
        formation,
        idState,
        idCity,
        idSchool,
        photoURL,
        photoKey,
      });

      return res.send();
    } catch (error) {
      return res.json(error)
    }

  },
};
