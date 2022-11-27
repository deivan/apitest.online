const express = require("express");
const router = express.Router();

const Users = require('../users');
const UsersList = require('../userslist');

router.get('/info', (req, res) => {
    res.json({ msg: 'There is just an info block', error: false })
});

router.get('/users', (req, res) => {
    res.json(UsersList);
});

router.get('/user/:id', (req, res) => {
    const id = +req.params?.id || 0;

    if (id < 10001 || id > 10010) {
        res.json({ error: true, msg: 'User ID should be in range from 10001 to 10010!' });
    } else {
        res.json(Users.filter(user => user.id === id)[0]);
    }
})

module.exports = router;