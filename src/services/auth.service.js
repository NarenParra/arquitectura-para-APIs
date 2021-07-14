const { generateToken } = require("../helpers/jwt.herper");
let _userService = null;

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signUp(user) {
    const { username } = user;
    const userExist = await _userService.getUserByUsername(username);

    if (userExist) {
      const error = new Error();
      error.status = 401;
      error.message = "User already exists";
      throw error;
    }

    return await _userService.create(user);
  }

  async signIn(user) {
    const { username, password } = user;

    const userExist = await _userService.getUserByUsername(username);

    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User does not exists";
      throw error;
    }

    //mirar si la paswor es igual a la encriptada

    const validPassword = userExist.comparePassword(password);

    if (!validPassword) {
      const error = new Error();
      error.status = 400;
      error.message = "Invalid password";
      throw error;
    }

    const userToEncode = {
      username: userExist.username,
      id: userExist._id,
    };
    //generartoken
    const token = generateToken(userToEncode);

    return { token, user: userExist };
  }
}

module.exports = AuthService;
