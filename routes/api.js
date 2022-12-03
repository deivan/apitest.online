const express = require("express");
const router = express.Router();

const Users = require('../users');
const UsersList = require('../userslist');

let newUserId = 10010;

router.get('/info', (req, res) => {
  res.json({ msg: 'There is just an info block/nYou are on the API Test environment', error: false })
});

router.get('/users', (req, res) => {
  res.json(UsersList);
});

router.get('/user/:id', (req, res) => {
  const id = +req.params?.id || 0;

  if (id < 10001 || id > 10010) {
    res.status(400).json({ error: true, msg: 'User ID should be in range from 10001 to 10010!' });
  } else {
    res.json(Users.filter(user => user.id === id)[0]);
  }
});

router.post('/user', (req, res) => {
  let data = req.body;

  if (data.username && data.first_name && data.last_name) {
    if (data.username.length > 50 || data.first_name.length > 50 || data.last_name.length > 50) {
      res.status(400).json({
        error: true,
        msg: 'Length of fields: username, first_name, last_name - should be not more 50 characters!'
      });
    } else {
      newUserId++;
      res.status(201).json({
        error: false,
        msg: 'User created successfully!',
        user: {
          id: newUserId,
          username: data.username,
          role: 'user',
          first_name: data.first_name,
          last_name: data.last_name,
          creation_date: Date.now(),
          last_visit_date: null
        }
      });
    }
  } else {
    res.status(400).json({
      error: true,
      msg: 'You missed one of the mandatory fields - username, first_name, last_name'
    });
  }
});

router.put('/user/:id', (req, res) => {
  const id = +req.params?.id || 0;
  let data = req.body;

  if (id < 10001 || id > 10010) {
    res.status(400).json({ error: true, msg: 'User ID should be in range from 10001 to 10010!' });
  } else {
    let user = {};

    if (data.username) user.username = data.username;
    if (data.first_name) user.first_name = data.first_name;
    if (data.last_name) user.last_name = data.last_name;
    res.json({
      error: false,
      msg: `User with ID:${id} updated successfully.`,
      user
    });
  }
});

router.delete('/user/:id', (req, res) => {
  const id = +req.params?.id || 0;

  if (id < 10001 || id > 10010) {
    res.status(400).json({ error: true, msg: 'User ID should be in range from 10001 to 10010!' });
  } else {
    res.json({
      error: false,
      msg: `User with ID:${id} deleted successfully.`
    });
  }
});

module.exports = router;