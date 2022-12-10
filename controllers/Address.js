const Addresses = require('./AddressesList');

module.exports = {
  get: (req, res) => {
    const id = +req.params?.id || 0;

    if (id < 10001 || id > 10010) {
      res.status(400).json({ error: true, msg: 'User ID should be in range from 10001 to 10010!' });
    } else {
      res.json([]);
    }
  },
  new: (req, res) => {
    const id = +req.params?.id || 0;

    if (id < 10001 || id > 10010) {
      res.status(400).json({ error: true, msg: 'User ID should be in range from 10001 to 10010!' });
    } else {
      res.json({});
    }
  },
  delete: (req, res) => {
    const id = +req.params?.id || 0;

    if (id < 20001 || id > 20010) {
      res.status(400).json({ error: true, msg: 'Address ID should be in range from 20001 to 20010!' });
    } else {
      res.json({});
    }
  }
};