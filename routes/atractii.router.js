const express = require('express');

const router = express.Router();

router.get('/atractii', (req, res) => {
    res.render('atractii');
});

module.exports = router;