import User from '../models/user';

module.exports = (router) => {
  console.log(router);
  router.post('/api/users', async (req, res, next) => {
    console.log(req);
    const { firstname, lastname } = req.body;
    try {
      const newUser = new User({
        firstname,
        lastname,
      });

      const user = await newUser.save();
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });

  router.get('/api/users', async (req, res, next) => {
    try {
      const Users = await User.find({}).select('-_id');
      return res.status(200).json(Users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });

  router.get('/api/users/:userId', async (req, res, next) => {
    console.log(req);
    const { userId } = req.params;
    try {
      const user = await User.findById(userId);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
};
