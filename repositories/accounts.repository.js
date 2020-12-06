const Account = require('../db/models/Account.model');

class AccountsRepository {
  find = async (filters) => {
    const { username } = filters;
    const query = { username };
    return Account.find(query);
  };

  findOne = async (id) => {
    return Account.findById(id);
  };

  add = async (account) => {
    const result = new Account(account).save();
    return result;
  };

  removeOne = async (id) => {
    return Account.deleteOne({ _id: id });
  };

  // TODO
  // update
}

module.exports = AccountsRepository;
