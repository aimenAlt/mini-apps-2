const axios = require('axios');
const safeJsonStringify = require('safe-json-stringify');

function getBpiHistory(req, res) {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-03-23&end=2019-03-23').then(function (data) {
    console.log(data.data);
    res.send(safeJsonStringify(data.data));
  }).catch(function (err) {
    console.log("HIIIIIIIIIIII");
    console.log(err);
  })
}

module.exports = getBpiHistory;
