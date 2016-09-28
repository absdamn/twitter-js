var express = require('express');
var app = express();
var router = express.Router()

router.use('/special', function(req,res,next) {
  console.log("You have reached a special place!");
  next();
});

router.use(function(req,res,next) {
  console.log(req.method + " " + req.originalUrl);
  next();
});

router.get('/', function(request, response){
  response.send('Welcome mate!');
});

router.get('/news', function(request, response){
  response.send('Here are the news!');
});

app.use('/', router);

app.listen(3000, function() {
  console.log("server listening");
});
