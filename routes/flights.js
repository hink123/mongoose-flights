var express = require('express');
var router = express.Router();
var flightsCtlr = require('../controllers/flights');

/* GET /flights listing. */
router.get('/', flightsCtlr.index);
router.get('/new', flightsCtlr.new);
router.post('/', flightsCtlr.create);
router.get('/:id', flightsCtlr.show);

module.exports = router;
