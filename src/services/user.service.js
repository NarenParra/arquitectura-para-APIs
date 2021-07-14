const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService {
  constructor(repository) {
    super(repository);
    _userRepository = repository;
  }

  async getUserByUsername(username) {
    const currentEntity = await _userRepository.getUserByUsername(username);

    return currentEntity;
  }
}

module.exports = UserService;
