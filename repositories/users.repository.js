class UsersRepository {
  users = [];

  findOne = async (id) => {
    return this.users.find((u) => u.id === id);
  };
}

module.exports = UsersRepository;
