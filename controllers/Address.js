const Addresses = require('./AddressesList');

module.exports = {
  get: (req, res) => {
    const id = +req.params?.id || 0;

    if (id < 10001 || id > 10010) {
      res.status(400).json({ error: true, msg: 'User ID should be in range from 10001 to 10010!' });
    } else {
      res.json(Addresses.filter(adr => adr.userId === id));
    }
  },
  new: (req, res) => {
    const id = +req.params?.id || 0;

    if (id < 10001 || id > 10010) {
      res.status(400).json({ error: true, msg: 'User ID should be in range from 10001 to 10010!' });
    } else {
      res.json({
        id: 20021,
        userId: id,
        type: req.params?.type || 'shipping',
        country: req.params?.country || 'Neverland',
        city: req.params?.city || 'Bigrouter',
        address: req.params?.address || '255 Dev Null st.',
        phone: req.params?.phone || '+127001'
      });
    }
  },
  delete: (req, res) => {
    const id = +req.params?.id || 0;

    if (id < 20001 || id > 20020) {
      res.status(400).json({ error: true, msg: 'Address ID should be in range from 20001 to 20010!' });
    } else {
      res.json({
        error: true,
        msg: `Address ${id} was deleted successfully`,
      });
    }
  }
};