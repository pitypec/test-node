const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
});

const User = mongoose.model('user', UserSchema);

export default User;
