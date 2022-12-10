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

    if (id < 30001 || id > 30010) {
      res.status(400).json({ error: true, msg: 'Payment ID should be in range from 30001 to 30010!' });
    } else {
      res.json({});
    }
  }
};