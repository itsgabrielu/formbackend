const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('This is homepage')
})

app.post('/form/post', (req, res) => {
  if (req.body.name && req.body.lastName && req.body.phone) {
    res.send('ok LA')
  }
  else res.status(400).send('There is a missing parameter')

  // receive name,last name, mobile phone number
  // return a response if successful for all fields, otherwise show an error
})

app.listen(5000, () => {
  console.log(`App is listening on port 5000`)
})
