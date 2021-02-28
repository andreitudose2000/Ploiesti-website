const express = require("express");
const path = require('path');
const bodyparser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyparser.json({
  extended: true
}));

app.set('views', './views');
app.set('view engine', 'ejs')

app.use('/public', express.static(path.join(__dirname, 'public')));



app.get('/acasa', (req, res) => {
  res.render('main');
});

const atractiiRouter = require('./routes/atractii.router');
const hartiRouter = require('./routes/harti.router');
const intrareRouter = require('./routes/intrare.router');
const istorieRouter = require('./routes/istorie.router');
const contactRouter = require('./routes/contact.router');

app.use(atractiiRouter);
app.use(hartiRouter);
app.use(intrareRouter);
app.use(istorieRouter);
app.use(contactRouter);

app.get('/', (req, res) => {
  res.render('intrare');
})



app.use((req, res) => {
  res.status(404).render('404');
})


app.listen(3000, (req, res) => {
  console.log("Server start on port 3000");
});