var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
//var router = express.Router();
var routes = require('./routes/')

//var env = nunjucks.configure('path', 'opts'); //where path says where the template lives (in example they use 'views') & options allow you to turn certain features on/off

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use('/', routes);
app.use(express.static(__dirname + '/public'));

// router.use('/special', function(req,res,next) {
//   console.log("You have reached a special place!");
//   next();
// });
//
// router.use(function(req,res,next) {
//   console.log(req.method + " " + req.originalUrl);
//   next();
// });
//
// var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//
// router.get('/', function(request, response){
//   response.render('index', {title: 'Hall of Fame', people: people});
// });

// router.get('/news', function(request, response){
//   response.send('Here are the news!');
// });
//
// app.use('/', router);

app.listen(3000, function() {
  console.log("server listening");
});
