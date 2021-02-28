const express = require('express');
const fs = require('fs');
let bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();


let rawdata = fs.readFileSync('data/database.json'); 
let feedbackBD = JSON.parse(rawdata);

function add_feedback(feedbackData){
  feedbackBD['feedbacks'].push(feedbackData);
  console.log(feedbackBD);
  let data = JSON.stringify(feedbackBD);//transform in sir
  fs.writeFileSync("data/database.json", data);//scriu in fisier
}

router.use(express.urlencoded({
  extended: true
}
));
router.get('/contact', (req, res) => {
    res.render('contact');
});

router.post('/contact', (req, res) => {
    const info = req.body;
    console.log(info);
    add_feedback(info);
    res.render('contact');
});

module.exports = router;