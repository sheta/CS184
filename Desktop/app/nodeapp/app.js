var express= require('express');
var app = express();


app.get('/', function(req, res) {
  res.render('index.jade', {
    locals: {
        title: 'Resilience'
    }
  });
});

app.listen(3000);
console.log('Listening on port 3000');
