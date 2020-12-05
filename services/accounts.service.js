// TODO
// entire service flow
const ServiceResponse = require('../common/ServiceResponse');
const stringValidator = require('../helpers/validators/strings.validator');

class AccountsService {
  constructor(accountsRepository) {
    this.accountsRepository = accountsRepository;
  }

  getByUsername = async (username) => {
    const validations = [
      stringValidator.isString(username, 'username'),
      stringValidator.isEmpty(username, 'username'),
    ];
    const serviceResponse = new ServiceResponse();
    serviceResponse.addValidationErrors(validations);

    if (serviceResponse.fields.length) {
      return serviceResponse;
    }

    const result = await this.accountsRepository.find({ username });
    serviceResponse.result = result[0];
    return serviceResponse;
  };

  post = async (account) => {
    const result = await this.accountsRepository.add(account);
    return { result, fields: [] };
  };

  // delete
  // put/patch
  // get
}

module.exports = AccountsService;
