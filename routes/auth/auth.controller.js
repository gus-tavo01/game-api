const jsonwebtoken = require('jsonwebtoken');
const ApiResponse = require('../../common/ApiResponse');
// use service instead repos
const AccountsRepository = require('../../repositories/accounts.repository');

class AuthController {
  constructor() {
    this.accountsRepository = new AccountsRepository();
  }

  login = async (req, res) => {
    const apiResponse = new ApiResponse();
    const { username, password } = req.body;
    const accountsResponse = await this.accountsRepository.find({ username });
    const account = accountsResponse[0];

    if (!account) {
      apiResponse.unauthorized('Invalid credentials');
      return res.status(apiResponse.statusCode).json(apiResponse);
    }

    // TODO
    // hash body.password
    // compare hashed result with DB stored password
    // if false, return 401 response

    const secret = process.env.JWT_SECRET;
    const expiresIn = '2h';
    const payload = {
      iat: Date.now(),
      sub: account.id,
    };
    const token = jsonwebtoken.sign(payload, secret, { expiresIn });
    const result = { token, expiresIn };
    apiResponse.ok(result);
    return res.status(200).json(apiResponse);
  };

  createLogin = (req, res) => {};

  // TODO:
  // delete this  dummy route
  getProfile = (req, res) => {
    const { user } = req;
    res.status(200).json(user);
  };
}

module.exports = AuthController;
