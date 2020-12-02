class AccountsRepository {
  accounts = [
    {
      id: 2,
      username: 'ticky',
      passwordHash:
        '$2b$10$A0ka6mNlRIw.Qa4mN3x3OOGU1JfEv03Nwl.GhRyesL2on84L8HyKO',
    },
  ];

  find = async (filters) => {
    const { username } = filters;
    const result = this.accounts.find((acc) => acc.username === username);
    return [result];
  };

  findOne = async (id) => {
    return this.accounts.find((acc) => acc.id === id);
  };

  add = async (account) => {
    this.accounts.push(account);
    return this.accounts.length;
  };

  // remove
  // update
}

module.exports = AccountsRepository;
