const express = require('express');
const path = require('path');
const parser = require('body-parser');
const axios = require('axios');
const router = express.Router();
const app = express();
const port = 9001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist/')));
app.post('/api/jobs',
  (req, res) => {
  let url = req.body.url
  axios.get(url)
    .then( response => {
      res.send(response.data);
    })
    .catch( err => {
      console.error(err);
      res.status(400).send(err);
    })
});

app.listen(port, () => console.log('listening to port:', port))