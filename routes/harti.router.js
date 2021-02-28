const express = require('express');

const router = express.Router();

router.get('/harti', (req, res) => {
    res.render('harti');
});

module.exports = router;