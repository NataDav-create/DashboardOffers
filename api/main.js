var express = require('express');
var app = express();
var fs = require("fs");

app.get('/newoffers', function (req, res) {
    res.json({'status':'ok'});
})

app.get('/hotoffers', function (req, res) {
    res.json({'status':'ok'});
 })

app.get('/expiredoffers', function (req, res) {
    res.json({'status':'ok'});
})


var server = app.listen(8089, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
