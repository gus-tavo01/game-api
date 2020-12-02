// TODO
// entire service flow
class AccountsService {
  constructor(accountsRepository) {
    this.accountsRepository = accountsRepository;
  }

  getByUsername = async (username) => {
    const result = await this.accountsRepository.find({ username });
    return { result: result[0], fields: [] };
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
