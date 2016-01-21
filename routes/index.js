var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function(req,res){
  var firstName=req.body.firstName
  res.render('post');
});

module.exports = router;
