ar express = require('express');
var burger.router = express.Router();
var burger_call = require('./models/burger.js');
var bodyParser = require('body-parser');

burger.router.use(bodyParser.json());
burger.router.use(bodyParser.urlencoded({extended: false}));
burger.router.use(bodyParser.text());
burger.router.use(bodyParser.json({type:'application/vnd.api+json'}));

burger.router.get('/', function(req,res){
  res.redirect('/burger');
});

burger.router.get('/burger', function(req,res){
  burger_call.read(function(data){
    // console.log(data);
    var hbs_object = {burger: data};
    // console.log(hbs_object);
    res.render('index', hbs_object);
  });
});

burger.router.post('/burger/add', function(req, res){
  // console.log(req.body.user_burger)
  burger_call.insert(req.body.user_burger, function(data){
    res.redirect('/burger');
  });
});

burger.router.put('/burger/update/:id?', function(req,res){
  var user_id = parseInt(req.params.id);
  burger_call.update(user_id, function(data){
    res.redirect('/burger');
  });
});

burger.router.put('/burger/delete/:id?', function(req,res){
  var user_id = parseInt(req.params.id);
  burger_call.delete(user_id, function(data){
    res.redirect('/burger');
  });
});
module.exports = burger.router;