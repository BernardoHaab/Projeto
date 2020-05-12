const connection = require("../connection");

module.exports = async function newSchool(req, res, next) {
  let {
    idSchool,
    newSchool = {
      name,
      type,
    },
  } = req.body;

  const { name, type } = newSchool;

  if (name != null && type != null && idSchool == 0) {
    await connection("school").insert({
      name,
      type,
    });

    await connection("school")
      .where({
        name: name,
        type: type,
      })
      .first("idSchool")
      .then((data) => {
        const { idSchool: newId } = data;
        
        req.body.idSchool = newId;
        next();
      })
      .catch((err) => console.log(err));
  }
};
