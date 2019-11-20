var express = require('express');
var router = express.Router();

var ticketsCtlr = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtlr.new);
router.post('/flights/:id/tickets', ticketsCtlr.create);
router.delete('/tickets/:id', ticketsCtlr.delete);

module.exports = router;