class AccountsRepository {
  accounts = [{ id: 2, username: 'yayis', password: 'password!' }];

  find = async (filters) => {
    const { username } = filters;
    const result = this.accounts.find((l) => l.username === username);
    return [result];
  };

  findOne = async (id) => {
    return this.accounts.find((a) => a.id === id);
  };
  // remove
  // update
}

module.exports = AccountsRepository;
