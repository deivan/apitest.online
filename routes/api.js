const express = require("express");
const router = express.Router();
const User = require('../controllers/User');
const Wrong = require('../controllers/Wrong');
const Address = require('../controllers/Address');
const Payment = require('../controllers/Payments');

router.get('/info', (req, res) => {
  res.json({ msg: 'There is just an info block/nYou are on the API Test environment', error: false })
});

// User model block
router.get('/users', User.all);
router.get('/user/:id', User.get);
router.post('/user', User.new);
router.put('/user/:id', User.update);
router.delete('/user/:id', );

// Wrong answers block
router.get('/wrong/timeout', Wrong.timeout);
router.get('/wrong/notfound', Wrong.notfound);
router.get('/wrong/server', Wrong.server);

// Adresses block
router.get('/addresses/:id', Address.get);
router.post('/addresses/:id', Address.new);
router.delete('/addresses/:id', Address.delete);

// Payments block
router.get('/payments/:id', Payment.get);
router.post('/payments/:id', Payment.new);
router.delete('/payments/:id', Payment.delete);

module.exports = router;