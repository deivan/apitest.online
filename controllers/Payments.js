const Payments = require('./PaymentsList');
let payCounter = 30030;

module.exports = {
  get: (req, res) => {
    const id = +req.params?.id || 0;

    if (id < 10001 || id > 10010) {
      res.status(400).json({ error: true, msg: 'User ID should be in range from 10001 to 10010!' });
    } else {
      res.json(Payments.filter(pay => pay.userId === id));
    }
  },
  new: (req, res) => {
    const id = +req.params?.id || 0;

    if (id < 10001 || id > 10010) {
      res.status(400).json({ error: true, msg: 'User ID should be in range from 10001 to 10010!' });
    } else {
      res.json({
        id: payCounter++,
        userId: id,
        type: "mcard",
        card: "51****9999",
        paymentId: "33bf62e09a05302506f3c846e827acbf642d57f3ae3c302028d50e33c4c7084e",
        expires: "12/23",
      });
    }
  },
  delete: (req, res) => {
    const id = +req.params?.id || 0;

    if (id < 30001 || id > 31000) {
      res.status(400).json({ error: true, msg: 'Payment ID should be in range from 30001 to 31000!' });
    } else {
      res.json({
        error: true,
        msg: `The Payment Method ${id} was deleted successfully`,
      });
    }
  }
};