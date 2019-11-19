var express = require('express');
var router = express.Router();
var arrivalsCtlr = require('../controllers/arrivals');

router.post('/flights/:id/arrivals', arrivalsCtlr.create);


module.exports = router;