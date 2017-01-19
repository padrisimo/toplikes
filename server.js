var express = require('express');
var app = express();

app.use(express.static(__dirname));

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});

//Vimeo API attack

var unirest = require("unirest");

var req = unirest("GET", "https://api.vimeo.com/channels/top/videos");

req.query({
  "page": "1",
  "per_page": "50",
  "sort": "likes",
  "direction": "desc"
});

req.headers({
  "postman-token": "39077c19-7985-6d93-cdf5-d9e9a8de0575",
  "cache-control": "no-cache",
  "authorization": "Basic MDRmNGExMWM0ZDJhYWNhZmE1YzRhMzJmNWE5OTgzMmIzN2QwY2YwMDpHRDN2MXRaZjdkRWNldHBwQjlCTzBuc1oyT2xZSzA5cXVaTWFLVnBTZ1NYdHlhbmgrOTdLdjROYTQyUHBSTXpqaXpSclpnYTd4NmhpbDJBZTB6QWhPK3pUc2Q0MXlkTVVyaW1zNlE1MldPVThlWUN4bEtROEo0SHhWYTlSQnE3dg=="
});

var data;

req.end(function (res) {
  if (res.error) throw new Error(res.error);
  data = res.body;
});

// GET the json and pass it thorw endpoint /vimeos

app.get('/vimeos', function (req, res) {
  res.send({ vimeos: data});
})
