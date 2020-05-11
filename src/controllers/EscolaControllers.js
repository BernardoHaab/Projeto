const connection = require('../connection');

module.exports = {

    async index(req, res){
        let escolas = [];

        const { nome } = req.body


        if ( nome ) {     

            escolas = await connection('escola')
            .where('nome', 'like', `${nome}%`)
            .select('*')
        } else {

            escolas = await connection.select('*').from('escola')
        }

        return res.json(escolas);
    }

}
 

    