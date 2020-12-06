function accountMapper(entity) {
  if (!entity) return null;
  const account = {
    id: entity.id,
    username: entity.username,
    email: entity.email,
    createDate: entity.createDate,
    lastLoginDate: entity.lastLoginDate,
    active: entity.isActive,
  };
  return account;
}

module.exports = accountMapper;
