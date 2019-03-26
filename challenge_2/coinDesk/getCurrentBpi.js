const axios = require('axios');
const safeJsonStringify = require('safe-json-stringify');

function getCurrentBpi(req, res) {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(function (data) {
    console.log(data.data);
    res.send(safeJsonStringify(data.data));
  }).catch(function (err) {
    console.log("HIIIIIIIIIIII");
    console.log(err);
  })
}

module.exports = getCurrentBpi;
