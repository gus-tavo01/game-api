const bcrypt = require('bcrypt');
const ApiResponse = require('../../common/ApiResponse');

class AccountsController {
  constructor(accountsService) {
    this.accountsService = accountsService;
  }

  postAccount = (req, res) => async (req, res) => {
    const { username, password } = req.body;
    const apiResponse = new ApiResponse();
    try {
      const getAccountResponse = await this.accountsService.getByUsername(
        username
      );

      if (!getAccountResponse.fields) {
        apiResponse.badRequest(
          'Please check your credentials for errors',
          getAccountResponse.fields
        );
        return res.status(apiResponse.statusCode).json(apiResponse);
      }

      if (!!getAccountResponse.result) {
        apiResponse.conflict(`Username: '${username}' already exists`);
        return res.status(apiResponse.statusCode).json(apiResponse);
      }

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      // TODO
      // map DTO into service request obj?
      const accountRequest = { username, passwordHash, ...req.body };
      const postAccountResponse = await this.accountsService.post(
        accountRequest
      );

      if (postAccountResponse.fields.length) {
        apiResponse.badRequest(
          'Please check your data for errors',
          postAccountResponse.fields
        );
        return res.status(apiResponse.statusCode).json(apiResponse);
      }

      if (!postAccountResponse.result && !postAccountResponse.fields.length) {
        apiResponse.unprocessableEntity(
          'The account cannot be added, please try again later'
        );
        return res.status(apiResponse.statusCode).json(apiResponse);
      }
      apiResponse.created(postAccountResponse.result);
      return res.status(apiResponse.statusCode).json(apiResponse);
    } catch (error) {
      apiResponse.internalServerError(error.message);
      return res.status(apiResponse.statusCode).json(apiResponse);
    }
  };
}

module.exports = AccountsController;
