 //metodos: index, show, update, store, destroy
/*
index: listagem de sessoes
store: criar uma sessao
show: listar uma unica sessao
update: atualizar alguma sessao
destroy: deletar uma sessao
*/

import User from '../models/User';

class SessionController{
   async store(req, res){
        const { email } = req.body;
        
        //verificando se esse usuario já existe
        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
 }

 export default new SessionController();