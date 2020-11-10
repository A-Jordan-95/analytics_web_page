var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Analytics tracker for alexjordan.page' });
});


/* GET region analytics page. */
router.get('/regionlist', function(req, res, next) {
  var db = req.db;
  var collection = db.get('regioncollection');
  collection.find({},{},function(e,docs) {
    res.json(docs);
  });
});

/* GET opsys analytics page. */
router.get('/opsyslist', function(req, res, next) {
  var db = req.db;
  var collection = db.get('opsyscollection');
  collection.find({},{},function(e,docs) {
    res.json(docs);
  });
});

/* GET visitors analytics page. */
router.get('/uniquevisitors', function(req, res) {
  var db = req.db;
  var collection = db.get('visitorscollection');
  collection.find({},{},function(e,docs) {
    res.json(docs);
  });
});

module.exports = router;
