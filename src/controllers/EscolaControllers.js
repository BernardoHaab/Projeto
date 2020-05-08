const connection = require('../connection');

module.exports = {
    async  create(nome, tipo) {

        await connection("escola").insert({
            nome,
            tipo
        });
        
        let id = []        

        await connection('escola').where({
            nome: nome,
            tipo:tipo
        }).first('idEscola').then(data => {
            id = data            
        }).catch((err) => console.log(err));

        

        return (id);
    },

    async index(req, res){
        let escolas = [];

        const escola_pesquisada = req.body

        const { nome } = escola_pesquisada

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
 

    