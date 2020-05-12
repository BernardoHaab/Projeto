const connection = require('../connection');

module.exports = {

    async index(req, res){
        let school = [];

        const { name } = req.body


        if ( name ) {     

            school = await connection('school')
            .where('name', 'like', `${name}%`)
            .select('*')
        } else {

            school = await connection.select('*').from('school')
        }

        return res.json(school);
    }

}
 

    