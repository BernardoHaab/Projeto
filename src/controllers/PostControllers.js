const connection = require("../connection");

module.exports = {
  async create(req, res) {
    const { text, scratchURL } = req.body;
    // const { photoURL, photoKey, } = req.file;
    const { session_id, email } = req.headers;

    const [validation] = await connection("teacher", "student")
      .where({
        idTeacher: session_id,
        email: email,
      })
      .select("formation");

    if (validation) {
      await connection("post").insert({
        text,
        scratchURL,
        //  photoURL,
        //  photoKey,
        idTeacher: session_id,
      });
    } else {
      await connection("post").insert({
        text,
        scratchURL,
        // photoURL,
        // photoKey,
        idStudent: session_id,
      });
    }

    return res.send()
  },
};
