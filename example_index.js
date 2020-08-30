var express = require('express');
var app = express();
var port = 8001;
var urlPrefix = '';

app.get(`${urlPrefix}/`, function (req, res) {
    res.send('Hello World');
});

var server = app.listen(port, function () {
    console.log(`listening at: ${port}`);
});
