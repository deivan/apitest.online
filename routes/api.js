const express = require("express");
const router = express.Router();

router.get("/info", (req, res, next) => {
    res.json({ msg: 'there an info block', error: false })
});

module.exports = router;