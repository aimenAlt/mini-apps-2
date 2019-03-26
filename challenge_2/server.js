const express = require('express');
const bodyParser = require('body-parser');
const getCurrentBpi = require('./coinDesk/getCurrentBpi.js');
const getBpiHistory = require('./coinDesk/getBpiHistory.js')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/currentBpi', getCurrentBpi)

app.get('/history', getBpiHistory)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})