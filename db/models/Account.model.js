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
  createDate: {
    type: Date,
    required: false,
    default: new Date(),
  },
  lastLoginDate: {
    type: Date,
    required: true,
    default: null,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const Account = model('Account', AccountSchema);

module.exports = Account;
