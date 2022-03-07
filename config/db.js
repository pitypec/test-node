const mongoose = require('mongoose');
require('dotenv').config();

const database = () => {
  mongoose
    .connect(process.env.DBURL_ENV, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((respose) => {
      console.log('database connected successfully');
    })
    .catch((err) => {
      console.log(err);
    });
};

export default database;
