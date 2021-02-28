const express = require('express');

const router = express.Router();

router.get('/istorie', (req, res) => {
    res.render('istorie');
});

module.exports = router;