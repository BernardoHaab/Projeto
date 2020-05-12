const connection = require("../connection");
const generateUniqueId = require("../utils/generateUniqId");

/**
 * **** TODO *****
 * -> Update
 * -> Delete
 */

module.exports = {
  async create(req, res) {
    let {
      name,
      email,
      password,
      idState,
      idCity,
      idSchool,
      idGrade,
      photoURL,
      photoKey,
    } = req.body;

    let idStudent = generateUniqueId();
    console.log(idStudent);
    
    
    try {
      await connection("student").insert({
        idStudent,
        name,
        email,
        password,
        idState,
        idCity,
        idSchool,
        idGrade,
        photoURL,
        photoKey,
      });

      return res.send();
      
    } catch (error) {

      return res.json(error);
    }
  },
};
