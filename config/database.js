const mongoose = require('mongoose');

module.exports = () => {
  const host = process.env.DB_HOST;
  const dbName = process.env.DB_NAME;
  const uri = `mongodb://${host}/${dbName}`;

  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  return mongoose.connection;
};
