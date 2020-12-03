const { Schema, model } = require('mongoose');

const AccountSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
});

const Account = model('Account', AccountSchema);

module.exports = Account;
