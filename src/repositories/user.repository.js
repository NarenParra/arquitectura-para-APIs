const BaseRepository = require("./base.repository");

let _user = null;

class UserRepository extends BaseRepository {
    //llama al constructor de la clase padre - super()
    constructor({User}){
        super(user);
        _user = User;
    }

    async getUserByUserName(username){
       return await _user.findOne({username});
    }
}

module.exports = UserRepository;