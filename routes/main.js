var express = require('express');
var router = express.Router();

/* GET main page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Express' });
});

router.get('/mypage', function(req, res, next) {
    res.render('mypage', { title: 'Express' });
});

router.get('/template', function(req, res, next) {
    res.render('template', { title: 'Express' });
});

router.get('/detail', function(req, res, next) {
    res.render('detail', { title: 'Express' });
});

module.exports = router;
