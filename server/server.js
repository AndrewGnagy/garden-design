var express = require('express');
var app = express();

//Default
app.use('/', express.static(__dirname + '/../app'));


app.get('/garden/:name', function(req, res){
   res.send("testing");
});

app.listen(8080);
